import { Text } from '../../components/Text'

import {
  HomeContainer,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from '../../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <TabsRoot defaultValue="tab1">
        <TabsList aria-label="Faça login ou um novo cadastro">
          <TabsTrigger className="TabsTrigger" value="tab1">
            LOGIN
          </TabsTrigger>
          <TabsTrigger className="TabsTrigger" value="tab2">
            CADASTRO
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Text>Faça LOGIN ou crie seu CADASTRO</Text>
        </TabsContent>
        <TabsContent value="tab2">
          <Text>Cadastre-se e entre automaticamente</Text>
        </TabsContent>
      </TabsRoot>
    </HomeContainer>
  )
}
