import Head from 'next/head'
import { AuthProvider } from '../../context/Auth'
import { TransactionsProvider } from '../../context/Transactions'

import { HomeLayout } from '../../screens/HomeLayout'

export default function Home() {
  return (
    <AuthProvider>
      <Head>
        <title>DG.Cash | Home</title>
      </Head>
      <TransactionsProvider>
        <HomeLayout />
      </TransactionsProvider>
    </AuthProvider>
  )
}
