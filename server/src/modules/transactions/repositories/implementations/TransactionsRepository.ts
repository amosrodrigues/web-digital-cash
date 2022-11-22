import { AppDataSource } from '../../../../database'

import { Repository } from 'typeorm'

import { Transaction } from '../../entities/Transactions'

import {
  ICreateTransactionDTO,
  ITrasactionsRepository,
} from '../ITransactionsRepository'
import { IUserDTO } from '../../../accounts/dtos/IUserDTO'
import { User } from '../../../accounts/entities/User'

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

    // const user = await AppDataSource.createQueryBuilder()
    //   .select('user')
    //   .from(User, 'user')
    //   .relation(Account, 'account.id')
    //   .where('user.username = :username', { username })
    //   .getOne()
    return user
  }

  async create({
    value,
    creditedAccountId,
    debitedAccountId,
  }: ICreateTransactionDTO): Promise<void> {
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

  async list(): Promise<Transaction[]> {
    const accounts = await this.repository.find()
    return accounts
  }
}

export { TransactionsRepository }
