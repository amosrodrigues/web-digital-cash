import { ReactNode } from 'react'
import { AuthProvider } from './Auth'
import { TransactionsProvider } from './Transactions'

interface AppProviderType {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderType) => (
  <AuthProvider>
    <TransactionsProvider>{children}</TransactionsProvider>
  </AuthProvider>
)

export default AppProvider
