import { createContext, ReactNode, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import { api } from '../services'
import axios, { AxiosError } from 'axios'

type Query = {
  startDate?: Date
  endDate?: Date
  type?: 'debited' | 'credited' | 'all'
}

export interface Transaction {
  id: string
  type: string
  value: number
  createdAt: Date
}

export interface TransactionsContextData {
  transactions: Transaction[]
  isLoading: boolean
  onGetTransactions: (query: Query) => void
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactios] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const onGetTransactions = async (data: Query) => {
    try {
      setIsLoading(true)
      const response = await api.post<Transaction[]>('/transactions/list', {
        ...data,
      })

      setTransactios(response.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError
        if (err.response?.status === 400) {
          toast.error('Error ao tentar listar as transações!', {
            theme: 'dark',
          })
        }
      }
    } finally {
      setIsLoading(false)
    }
  }

  const data = { transactions, isLoading, onGetTransactions }

  useMemo(
    () => ({ transactions, isLoading, onGetTransactions }),
    [isLoading, transactions],
  )

  return (
    <TransactionsContext.Provider value={data}>
      {children}
    </TransactionsContext.Provider>
  )
}
