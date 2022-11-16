import { Login } from '../components/SignIn'
import { Create } from '../components/SignIn/Create'
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
      <TabsRoot defaultValue="tab1">
        <TabsList aria-label="Faça login ou um novo cadastro">
          <TabsTrigger className="TabsTrigger" value="tab1">
            Entrar
          </TabsTrigger>
          <TabsTrigger className="TabsTrigger" value="tab2">
            Cadastrar
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Text>Faça LOGIN ou crie seu CADASTRO</Text>
          <Login />
        </TabsContent>
        <TabsContent value="tab2">
          <Text>Cadastre-se e entre automaticamente</Text>
          <Create />
        </TabsContent>
      </TabsRoot>
    </AppContainer>
  )
}
