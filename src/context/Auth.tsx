import axios, { AxiosError } from 'axios'
import Router from 'next/router'
import { destroyCookie, parseCookies } from 'nookies'

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { toast } from 'react-toastify'
import { Keys } from '../constants'
import { api } from '../services/api'

export type Account = {
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
  onGetUserData: () => Promise<void>
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

  const onGetUserData = useCallback(async () => {
    const response = await api.get<UserResponse>('/users/me')

    setUser(response.data.user)
  }, [])

  const onSignIn = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true)

      onGetUserData()

      Router.push('/home')
    } catch (error) {
      let description = 'Ocorreu um erro ao fazer login, cheque as credenciais'
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError
        if (err.response?.status === 400) {
          description = 'Usuário inexiste!'
        }
      }
      toast.error(`${description}`, {
        theme: 'dark',
      })
    } finally {
      setIsLoading(false)
    }
  }, [onGetUserData])

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
    () => ({ user, isLoading, isAuthenticated, onGetUserData, onAuthStatus }),
    [user, isLoading, isAuthenticated, onGetUserData, onAuthStatus],
  )

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
