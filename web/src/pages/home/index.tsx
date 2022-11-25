import AppProvider from '../../context'
import { TransactionsProvider } from '../../context/Transactions'

import { HomeLayout } from '../../screens/HomeLayout'

export default function Home() {
  return (
    <AppProvider>
      <TransactionsProvider>
        <HomeLayout />
      </TransactionsProvider>
    </AppProvider>
  )
}
