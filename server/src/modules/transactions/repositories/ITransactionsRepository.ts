import { Transaction } from '../entities/Transactions'

interface ICreateTransactionDTO {
  value: string
  debitedAccountId?: string
  creditedAccountId?: string
}

interface IaccountsRepository {
  create({
    value,
    debitedAccountId,
    creditedAccountId,
  }: ICreateTransactionDTO): Promise<void>
  findByName(name: string): Promise<Transaction>
}

export { IaccountsRepository, ICreateTransactionDTO }
