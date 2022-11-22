import { CurrencyCircleDollar, Receipt, SignOut } from 'phosphor-react'

import { Avatar } from '../../components/Avatar'
import { Button } from '../../components/Button'
import { Text } from '../../components/Text'
import { Box } from '../../components/Box'

import { Search, Table, Transaction } from '../Transactions'

import {
  Balance,
  HomeContainer,
  Profile,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
  Transactions,
  UserBalance,
} from '../../styles/pages/home'

import * as Dialog from '@radix-ui/react-dialog'
import { SignOutModal } from '../../screens/SignOutModal'
import { useAuth } from '../../hooks/useAuth'
import { currencyFormatter } from '../../utils/formatter'

export function HomeLayout() {
  const { user } = useAuth()
  return (
    <HomeContainer>
      <UserBalance as={Box}>
        <Profile>
          <Avatar alt="amosrodrigues@email.com" />
          <div>
            <Text as="h2">Olá!</Text>
            <Text>{user?.username}</Text>
          </div>
        </Profile>

        <Balance>
          <Text>Saldo Atual</Text>
          <Text as="span">
            {user && currencyFormatter.format(user.account?.balance)}
          </Text>
        </Balance>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="customLink">
              <SignOut size={32} weight="bold" />
              Sair
            </Button>
          </Dialog.Trigger>
          <SignOutModal />
        </Dialog.Root>
      </UserBalance>

      <Transactions>
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
            <Transaction />
          </TabsContent>
          <TabsContent value="tab2">
            <Search />
            <Table />
          </TabsContent>
        </TabsRoot>
      </Transactions>
    </HomeContainer>
  )
}
