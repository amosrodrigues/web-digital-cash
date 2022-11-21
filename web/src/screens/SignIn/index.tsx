import { EnvelopeSimple, LockKey } from 'phosphor-react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@hookform/error-message'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'

import { FormContainer } from './styles'

import * as yup from 'yup'
import { Loading } from '../../components/Loading'
import { useRouter } from 'next/router'
import { Box } from '../../components/Box'
import { setCookie } from 'nookies'
import { api } from '../../services/api'
import axios, { AxiosError } from 'axios'
import { Keys } from '../../constants'

type SignInFormData = {
  username?: string
  password?: string
}

type UserResponse = {
  token: string
  user: { username: string }
}

const SignInSchema = yup.object().shape({
  username: yup
    .string()
    .required('E-mail obrigatório')
    .min(3, 'No mínimo 3 caracteres')
    .email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'Deve conter pelo menos 8 caracteres, um número e uma letra maiúscula',
    ),
})

export function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInSchema),
  })

  const router = useRouter()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    event?.preventDefault()

    try {
      const { username, password } = values

      const response = await api.post<UserResponse>('/sessions', {
        username,
        password,
      })

      const token = response.data.token

      if (token) {
        api.defaults.headers.authorization = token

        setCookie(null, Keys.CLIENT_ID, `${token}`, {
          maxAge: 60 * 60 * 24 * 1, // 1 dia
          path: '/',
        })
      }

      router.push('/home')
    } catch (error) {
      console.error('aqui', error)
      let description =
        'Erro ao tentar realizar login, tente novamente mais tarde.'

      if (axios.isAxiosError(error)) {
        const err = error as AxiosError

        if (err.response?.status === 400) {
          description = 'Usuário inexiste!'
        }
      }

      toast.warning(`${description}`, {
        theme: 'dark',
      })
    }
  }

  const { errors } = formState

  return (
    <Box>
      <ToastContainer autoClose={2000} />
      <FormContainer onSubmit={handleSubmit(handleSignIn)}>
        <label htmlFor="username">
          E-mail
          <TextInput
            id="username"
            type="username"
            placeholder="exemplo@email.com"
            icon={<EnvelopeSimple />}
            autoComplete="off"
            {...register('username')}
          />
          <ErrorMessage
            errors={errors}
            name="username"
            render={({ message }) => <span>{message}</span>}
          />
        </label>
        <label htmlFor="password">
          Senha
          <TextInput
            id="password"
            placeholder="********"
            icon={<LockKey />}
            autoComplete="off"
            isPasswordIcon
            {...register('password')}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <span>{message}</span>}
          />
        </label>

        <Button disabled={formState.isSubmitting}>
          {formState.isSubmitting ? <Loading /> : 'Entrar'}
        </Button>
      </FormContainer>
    </Box>
  )
}
