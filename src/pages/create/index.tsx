import { Create } from '../../screens/Create'
import { Text } from '../../components/Text'

import Link from 'next/link'

import { CreateContainer, SectionCreate } from '../../styles/pages/create'
import { ArrowLeft } from 'phosphor-react'
import { Button } from '../../components/Button'
import Head from 'next/head'

export default function App() {
  return (
    <CreateContainer>
      <Head>
        <title>DG.Cash | Cadastro</title>
      </Head>
      <SectionCreate>
        <Text as="h2">Crie sua conta</Text>

        <Create />

        <Button as={Link} href="/" variant="customLink">
          <ArrowLeft size={20} weight="bold" />
          Voltar para login
        </Button>
      </SectionCreate>
    </CreateContainer>
  )
}
