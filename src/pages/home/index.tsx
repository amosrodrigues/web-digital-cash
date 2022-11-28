import { AuthProvider } from '../../context/Auth'
import { TransactionsProvider } from '../../context/Transactions'

import { HomeLayout } from '../../screens/HomeLayout'

export default function Home() {
  return (
    <AuthProvider>
      <TransactionsProvider>
        <HomeLayout />
      </TransactionsProvider>
    </AuthProvider>
  )
}
