import { inject, injectable } from 'tsyringe'

import { Transaction } from '../../entities/Transactions'
import { ITrasactionsRepository } from '../../repositories/ITransactionsRepository'

@injectable()
class ListTransactionsUseCase {
  constructor(
    @inject('transactionsRepository')
    private transactionsRepository: ITrasactionsRepository,
  ) {}

  async execute(): Promise<Transaction[]> {
    const transactions = await this.transactionsRepository.list()

    return transactions
  }
}

export { ListTransactionsUseCase }
