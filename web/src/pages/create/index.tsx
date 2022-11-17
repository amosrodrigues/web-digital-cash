import { Button } from '../../components/Button'
import { Create } from '../../screens/Create'
import { Text } from '../../components/Text'

import Link from 'next/link'

import {
  CreateContainer,
  SectionCreate,
  SectionSignIn,
} from '../../styles/pages/create'

export default function App() {
  return (
    <CreateContainer>
      <SectionCreate>
        <Text as="h2">CADASTRE-SE</Text>
        <Text>
          Primeiro acesso á Carteria Digital da NG.CASH? Cadastre sua conta e
          crie seu usuário. É simples, rápido e seguro.
        </Text>
        <Button as={Link} href="/create" variant="secondary">
          CASATRAR
        </Button>
      </SectionCreate>

      <SectionSignIn>
        <Text>JÁ SOU USUÁRIO DA</Text>
        <Text as="h2">CARTEIRA DIGITAL NG.CASH</Text>
        <Create />
      </SectionSignIn>
    </CreateContainer>
  )
}
