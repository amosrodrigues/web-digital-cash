import { ReactNode } from 'react'
import { AuthProvider } from './Auth'

interface AppProviderType {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderType) => (
  <AuthProvider>{children}</AuthProvider>
)

export default AppProvider
