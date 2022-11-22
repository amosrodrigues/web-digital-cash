import { IUserDTO } from '../../accounts/dtos/IUserDTO'
import { Transaction } from '../entities/Transactions'

interface ICreateTransactionDTO {
  value: number
  debitedAccountId?: string
  creditedAccountId?: string
}

// interface ICreateTransactionDTO {
//   value: number
//   creditedAccountId: string
//   debitedAccountId: string
// }

interface ITrasactionsRepository {
  create({
    value,
    creditedAccountId,
    debitedAccountId,
  }: ICreateTransactionDTO): Promise<void>
  findById(id: string): Promise<Transaction>
  getUserBalance(username: string): Promise<IUserDTO>
  updateBalance({
    value,
    creditedAccountId,
    debitedAccountId,
  }: ICreateTransactionDTO): Promise<void>
  list(): Promise<Transaction[]>
}

export { ITrasactionsRepository, ICreateTransactionDTO }
