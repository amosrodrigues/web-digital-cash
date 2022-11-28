import { useContext } from 'react'
import {
  TransactionsContext,
  TransactionsContextData,
} from '../context/Transactions'

export function useTransactions(): TransactionsContextData {
  const context = useContext(TransactionsContext)

  return context
}
