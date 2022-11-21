import { Transaction } from '../entities/Transactions'

interface ICreateTransactionDTO {
  value: number
  debitedAccountId?: string
  creditedAccountId?: string
}

interface ITrasactionsRepository {
  create({
    value,
    debitedAccountId,
    creditedAccountId,
  }: ICreateTransactionDTO): Promise<void>
  findById(id: string): Promise<Transaction>
  list(): Promise<Transaction[]>
}

export { ITrasactionsRepository, ICreateTransactionDTO }
