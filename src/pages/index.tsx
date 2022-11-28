import Link from 'next/link'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { SignIn } from '../screens/SignIn'

import {
  SectionCreate,
  SectionSignIn,
  SignInContainer,
} from '../styles/pages/signIn'

export default function SgnIng() {
  return (
    <SignInContainer>
      <SectionCreate>
        <Text as="h2">CADASTRE-SE</Text>
        <Text>
          Primeiro acesso na Carteria Digital da NG.CASH? Cadastre sua conta e
          crie seu usuário. É simples, rápido e seguro.
        </Text>
        <Button as={Link} href="/create" variant="secondary">
          CASATRAR
        </Button>
      </SectionCreate>

      <SectionSignIn>
        <Text>JÁ SOU USUÁRIO DA</Text>
        <Text as="h2">CARTEIRA DIGITAL NG.CASH</Text>
        <SignIn />
      </SectionSignIn>
    </SignInContainer>
  )
}
