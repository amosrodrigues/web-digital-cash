import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppError'
import { ITrasactionsRepository } from '../../repositories/ITransactionsRepository'

interface IRequest {
  value: number
  debitedAccountId?: string
  creditedAccountId?: string
}

@injectable()
class CreateTransactionUseCase {
  constructor(
    @inject('accountsRepository')
    private accountsRepository: ITrasactionsRepository,
  ) {}

  async execute({
    value,
    creditedAccountId,
    debitedAccountId,
  }: IRequest): Promise<void> {
    await this.accountsRepository.create({
      value,
      creditedAccountId,
      debitedAccountId,
    })
  }
}

export { CreateTransactionUseCase }
