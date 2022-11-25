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

interface IResponse {
  type: string
  value: number
  createdAt: Date
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
  }: IRequest): Promise<Partial<IResponse[]>> {
    const transactions = await this.transactionsRepository.list({
      userId,
      startDate,
      endDate,
    })

    if (!transactions) {
      throw new AppError('Não é possível listar as transações!', 400)
    }

    const { credited, debited } = transactions

    const creditedList = credited.map((transaction) => ({
      type: 'credited',
      value: transaction.value,
      createdAt: transaction.createdAt,
    }))

    const debitedList = debited.map((transaction) => ({
      type: 'debited',
      value: transaction.value,
      createdAt: transaction.createdAt,
    }))

    switch (type) {
      case 'credited':
        return creditedList
      case 'debited':
        return debitedList
      default:
        return [...creditedList, ...debitedList]
    }
  }
}

export { ListTransactionsUseCase }
