import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Wallet } from 'phosphor-react'
import { Text } from '../components/Text'

import { Container, Header } from '../styles/pages/app'

import 'react-toastify/dist/ReactToastify.css'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Wallet size={64} />

        <div>
          <Text>
            DG<span>.</span>CA<span>$</span>H
          </Text>
          <Text>CARTEIRA DIGITAL</Text>
        </div>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
