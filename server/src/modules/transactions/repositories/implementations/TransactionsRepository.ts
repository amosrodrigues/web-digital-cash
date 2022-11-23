import { AppDataSource } from '../../../../database'

import { Between, Brackets, Raw, Repository } from 'typeorm'

import { Transaction } from '../../entities/Transactions'

import {
  ICreateTransactionDTO,
  ITrasactionsRepository,
} from '../ITransactionsRepository'
import { IUserDTO } from '../../../accounts/dtos/IUserDTO'
import { User } from '../../../accounts/entities/User'
import { Account } from '../../../accounts/entities/Account'

class TransactionsRepository implements ITrasactionsRepository {
  private repository: Repository<Transaction>

  constructor() {
    this.repository = AppDataSource.getRepository(Transaction)
  }

  async getUserBalance(username: string): Promise<IUserDTO> {
    const usersRepository = AppDataSource.manager.getRepository(User)

    const user = await usersRepository.findOne({
      where: {
        username,
      },
      relations: {
        account: true,
      },
    })
    return user
  }

  async updateBalance({
    value,
    creditedAccountId,
    debitedAccountId,
  }: ICreateTransactionDTO): Promise<void> {
    await AppDataSource.createQueryBuilder()
      .update(Account)
      .set({
        balance: () => `balance + ${value}`,
      })
      .where({ id: creditedAccountId })
      .execute()

    await AppDataSource.createQueryBuilder()
      .update(Account)
      .set({
        balance: () => `balance - ${value}`,
      })
      .where({ id: debitedAccountId })
      .execute()
  }

  async create({
    value,
    creditedAccountId,
    debitedAccountId,
  }: ICreateTransactionDTO): Promise<void> {
    await this.updateBalance({
      value,
      creditedAccountId,
      debitedAccountId,
    })

    const transaction = this.repository.create({
      value,
      creditedAccountId,
      debitedAccountId,
    })

    await this.repository.save(transaction)
  }

  async findById(id: string): Promise<Transaction> {
    const transaction = this.repository.findOne({ where: { id } })

    return transaction
  }

  async list({ userId }): Promise<Transaction[]> {
    const usersRepository = AppDataSource.manager.getRepository(User)
    const user = await usersRepository.findOne({
      where: { id: userId },
      relations: { account: true },
    })
    const accountId = user.account.id

    const startDate = '2022-11-23'
    const endDate = '2022-11-23'

    const loadedTransactions = await AppDataSource.getRepository(
      Transaction,
    ).findBy({
      // where: [
      //   { creditedAccountId: accountId },
      //   { debitedAccountId: accountId },
      // ],
      createdAt: Raw((alias) => `${alias} > :startDate `, {
        startDate: '2022-11-21',
      }),
    })

    // console.log(loadedTransactions)

    const transactions = await this.repository
      .createQueryBuilder('transaction')
      .where('transaction.creditedAccountId = :creditedAccountId', {
        creditedAccountId: accountId,
      })
      .andWhere(
        new Brackets((qb) => {
          qb.where('transaction.createdAt >= :startDate', {
            startDate: new Date(startDate),
          }).orWhere('transaction.createdAt <= :endDate', {
            endDate: new Date(endDate),
          })
        }),
      )
      .getMany()

    return transactions
  }
}

export { TransactionsRepository }
