import { inject, injectable } from 'tsyringe'

import { Transaction } from '../../entities/Transactions'
import { ITrasactionsRepository } from '../../repositories/ITransactionsRepository'

interface IRequest {
  userId: string
}

@injectable()
class ListTransactionsUseCase {
  constructor(
    @inject('transactionsRepository')
    private transactionsRepository: ITrasactionsRepository,
  ) {}

  async execute({ userId }: IRequest): Promise<Transaction[]> {
    const transactions = await this.transactionsRepository.list({ userId })

    return transactions
  }
}

export { ListTransactionsUseCase }
