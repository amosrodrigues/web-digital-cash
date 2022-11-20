import { Specification } from '../entities/Specification'

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface IaccountsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>
  findByName(name: string): Promise<Specification>
}

export { IaccountsRepository, ICreateSpecificationDTO }
