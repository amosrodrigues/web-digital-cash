import { inject, injectable } from 'tsyringe'
import { Category } from '../../../accounts/entities/Account'
import { ItransactionsRepository } from '../../repositories/ItransactionsRepository'

@injectable()
class ListtransactionsUseCase {
  constructor(
    @inject('transactionsRepository')
    private transactionsRepository: ItransactionsRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const transactions = await this.transactionsRepository.list()

    return transactions
  }
}

export { ListtransactionsUseCase }
