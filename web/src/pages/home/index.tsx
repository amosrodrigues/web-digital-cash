import Link from 'next/link'
import { CurrencyCircleDollar, Receipt, SignOut } from 'phosphor-react'
import { Avatar } from '../../components/Avatar'
import { Button } from '../../components/Button'
import { Text } from '../../components/Text'

import {
  Balance,
  HomeContainer,
  Profile,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
  UserBalance,
} from '../../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <UserBalance>
        <Profile>
          <Avatar alt="amosrodrigues@email.com" />
          <div>
            <Text as="h2">Olá!</Text>
            <Text>amosrodrigues@email.comm</Text>
          </div>
        </Profile>

        <Balance>
          <Text>Saldo Atual</Text>
          <Text as="span">R$ 100,00</Text>
        </Balance>

        <Button as={Link} href="/" variant="customLink">
          <SignOut size={32} weight="bold" />
          Sair
        </Button>
      </UserBalance>

      <TabsRoot defaultValue="tab1">
        <TabsList aria-label="Faça login ou um novo cadastro">
          <TabsTrigger className="TabsTrigger" value="tab1">
            <CurrencyCircleDollar size={28} weight="bold" />
            Transferências
          </TabsTrigger>
          <TabsTrigger className="TabsTrigger" value="tab2">
            <Receipt size={28} weight="bold" />
            Minhas transações
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
