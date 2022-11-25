import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services'
import { Account } from './Auth'
import { Keys } from '../constants'

type Query = {
  startDate?: Date
  endDate?: Date
  type?: 'debited' | 'credited' | 'all'
}

export interface Transaction {
  id: string
  value: number
  debitedAccountId: string
  creditedAccountId: string
  account: Account
  createdAt: Date
}

export interface TransactionsContextData {
  transactions: Transaction[]
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

  const onGetTransactions = async (data: Query) => {
    console.log(data)

    const date = new Date('2020-05-12T23:50:21.817Z')
    date.toString()

    const response = await api.get<Transaction[]>('/transactions')

    setTransactios(response.data)
  }

  const value = {
    transactions,
    onGetTransactions,
  }

  useEffect(() => {
    const { [Keys.TOKEN]: token } = parseCookies()

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`
      ;(async () => {
        try {
          await onGetTransactions({})
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const err = error as AxiosError
            if (err.response?.status === 400) {
              toast.error(
                'Ocorreu um erro ao fazer login, cheque as credenciais',
                {
                  theme: 'dark',
                },
              )
            }
          }
        }
      })()
    }
  }, [])

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  )
}
function Now(): string | number | Date {
  throw new Error('Function not implemented.')
}
