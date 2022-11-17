import { Create } from '../../screens/Create'
import { Text } from '../../components/Text'

import Link from 'next/link'

import { CreateContainer, SectionCreate } from '../../styles/pages/create'
import { ArrowLeft } from 'phosphor-react'

export default function App() {
  return (
    <CreateContainer>
      <SectionCreate>
        <Text as="h2">Crie sua conta</Text>

        <Create />

        <Link href="/">
          <ArrowLeft size={20} weight="bold" />
          <Text>Voltar para login</Text>
        </Link>
      </SectionCreate>
    </CreateContainer>
  )
}
