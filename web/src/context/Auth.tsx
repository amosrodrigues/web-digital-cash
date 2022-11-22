import axios, { AxiosError } from 'axios'
import Router from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { toast } from 'react-toastify'
import { Keys } from '../constants'
import { api } from '../services/api'

type Account = {
  id: string
  balance: number
}

export type User = {
  id: string
  username: string
  accountId: string
  account: Account
}

export type SignInCredentials = {
  username?: string
  password?: string
}

type UserResponse = {
  user: User
}

export interface AuthContextData {
  user: User | null
  isLoading: boolean
  onAuthStatus: (status: string) => void
}

export const AuthContext = createContext({} as AuthContextData)

interface UserProviderType {
  children: ReactNode
}

export const AuthProvider = ({ children }: UserProviderType) => {
  const [user, setUser] = useState<User | null>({} as User)
  const [authStatus, setAuthStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const isAuthenticated = !!user

  const onAuthStatus = useCallback((status: string) => {
    setAuthStatus(status)
  }, [])

  const onSignIn = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true)

      const response = await api.get<UserResponse>('/users/me')

      setUser(response.data.user)

      Router.push('/home')
    } catch (error) {
      console.error(error)
      let description = 'Ocorreu um erro ao fazer login, cheque as credenciais'
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError
        if (err.response?.status === 400) {
          description = 'Usuário inexiste!'
        }
      }
      toast.warning(`${description}`, {
        theme: 'dark',
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  const onSignOut = useCallback(() => {
    setIsLoading(true)
    delete api.defaults.headers.authorization
    setUser(null)
    destroyCookie(undefined, Keys.TOKEN, { path: '/' })
    Router.push('/')
  }, [])

  useEffect(() => {
    ;(() => {
      switch (authStatus) {
        case 'signOut':
          onSignOut()
          break

        case 'signIn':
          onSignIn()
          break

        default:
          break
      }
    })()
  }, [authStatus, onSignIn, onSignOut])

  useEffect(() => {
    const { [Keys.TOKEN]: token } = parseCookies()

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`
      ;(async () => {
        try {
          onSignIn()
        } catch (error) {
          onSignOut()
        } finally {
          setIsLoading(false)
        }
      })()
    } else {
      onAuthStatus('signOut')
    }
  }, [onAuthStatus, onSignIn, onSignOut])

  const data = useMemo(
    () => ({ user, isLoading, onAuthStatus, isAuthenticated }),
    [isLoading, user, onAuthStatus, isAuthenticated],
  )

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
