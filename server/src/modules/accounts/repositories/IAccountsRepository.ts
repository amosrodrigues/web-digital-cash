import { Account } from '../entities/Account'

interface ICreateAccountDTO {
  balance: number
}

interface IAccountsRepository {
  findById(name: string): Promise<Account>
  list(): Promise<Account[]>
  create({ balance }: ICreateAccountDTO): Promise<void>
}

export { IAccountsRepository, ICreateAccountDTO }
