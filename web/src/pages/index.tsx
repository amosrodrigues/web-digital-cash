import { ArrowArcLeft } from 'phosphor-react'
import { Box } from '../components/Box'
import { Text } from '../components/Text'
import {
  AppContainer,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from './styles'

export default function App() {
  return (
    <AppContainer>
      <Text>App</Text>
      <TabsRoot defaultValue="tab1">
        <TabsList aria-label="Faça login ou um novo cadastro">
          <TabsTrigger value="tab1">Entrar</TabsTrigger>
          <TabsTrigger value="tab2">Cadastrar</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Text>Fazer Login</Text>
        </TabsContent>
        <TabsContent value="tab2">
          <Text>Fazer Cadastro</Text>
        </TabsContent>
      </TabsRoot>
    </AppContainer>
  )
}
