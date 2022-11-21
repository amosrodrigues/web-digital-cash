import { AppDataSource } from '../../../../database'

import { Repository } from 'typeorm'

import { Transaction } from '../../entities/Transactions'

import {
  ICreateTransactionDTO,
  ITrasactionsRepository,
} from '../ITransactionsRepository'

class TransactionsRepository implements ITrasactionsRepository {
  private repository: Repository<Transaction>

  constructor() {
    this.repository = AppDataSource.getRepository(Transaction)
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
