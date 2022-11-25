import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppError'

import { Transaction } from '../../entities/Transactions'
import {
  ITransactionsList,
  ITrasactionsRepository,
} from '../../repositories/ITransactionsRepository'

interface IRequest {
  userId: string
  startDate: string
  endDate: string
  type: string
}

@injectable()
class ListTransactionsUseCase {
  constructor(
    @inject('transactionsRepository')
    private transactionsRepository: ITrasactionsRepository,
  ) {}

  async execute({
    userId,
    startDate,
    endDate,
    type,
  }: IRequest): Promise<ITransactionsList> {
    const transactions = await this.transactionsRepository.list({
      userId,
      startDate,
      endDate,
    })

    if (!transactions) {
      throw new AppError('Não é possível listar as transações!', 400)
    }

    const { credited, debited } = transactions
    const all = [...credited, ...debited]

    switch (type) {
      case 'credited':
        return { credited }
      case 'debited':
        return { debited }
      default:
        return { all }
    }
  }
}

export { ListTransactionsUseCase }
