import AppProvider from '../../context'

import { HomeLayout } from '../../screens/HomeLayout'

export default function Home() {
  return (
    <AppProvider>
      <HomeLayout />
    </AppProvider>
  )
}
