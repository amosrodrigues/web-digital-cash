import { useRouter } from 'next/router'
import { destroyCookie, parseCookies } from 'nookies'
import { type } from 'os'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Keys } from '../constants'
import { api } from '../services/api'

type Account = {
  id: string
  balance: number
}

type User = {
  id: string
  username: string
  accountId: string
  account: Account
}

interface UserContextType {
  user: User
  signOut: () => void
}

const UserContext = createContext({} as UserContextType)

interface UserProviderType {
  children: ReactNode
}

export const UserProvider = async ({ children }: UserProviderType) => {
  const [user, setUser] = useState<User>({} as User)
  const router = useRouter()

  const signOut = () => {
    destroyCookie(undefined, Keys.CLIENT_ID)
    router.push('/')
  }

  useEffect(() => {
    const { [Keys.CLIENT_ID]: token } = parseCookies()

    if (token) {
      ;(async () => {
        try {
          const response = await api.get<User>('/me')

          setUser(response.data)
        } catch (error) {
          signOut()
        }
      })()
    }
  }, [])

  const auth = useMemo(() => ({ user, signOut }), [user])

  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>
}

export const useAuth = () => useContext(UserContext)
