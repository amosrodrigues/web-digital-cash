import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppError'
import { IaccountsRepository } from '../../repositories/IaccountsRepository'

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('accountsRepository')
    private accountsRepository: IaccountsRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.accountsRepository.findByName(
      name,
    )

    if (specificationAlreadyExists) {
      throw new AppError('Specification already exists!')
    }

    await this.accountsRepository.create({
      name,
      description,
    })
  }
}

export { CreateSpecificationUseCase }
