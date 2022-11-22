import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppError'
import { User } from '../../../accounts/entities/User'
import { ITrasactionsRepository } from '../../repositories/ITransactionsRepository'

interface IRequest {
  value: number
  debitedAccountId?: string
  creditedAccountId?: string
}

@injectable()
class CreateTransactionUseCase {
  constructor(
    @inject('transactionsRepository')
    private transactionsRepository: ITrasactionsRepository,
  ) {}

  async validate({
    value,
    creditedAccountId,
    debitedAccountId,
  }: IRequest): Promise<void> {
    const userData = await this.transactionsRepository.getUserBalance(
      debitedAccountId,
    )

    console.log(userData)

    if (!userData) {
      throw new AppError('Conta do destinatário inexistente!', 404)
    }

    if (userData?.account?.balance < value) {
      throw new AppError('Saldo insuficiente!', 400)
    }
  }

  async execute({
    value,
    creditedAccountId,
    debitedAccountId,
  }: IRequest): Promise<void> {
    await this.transactionsRepository.create({
      value,
      creditedAccountId,
      debitedAccountId,
    })
  }
}

export { CreateTransactionUseCase }
