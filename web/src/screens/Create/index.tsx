import { EnvelopeSimple, LockKey } from 'phosphor-react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'
import { FormContainer } from './styles'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ErrorMessage } from '@hookform/error-message'

import * as yup from 'yup'
import { Loading } from '../../components/Loading'
import { useRouter } from 'next/router'
import { Box } from '../../components/Box'
import { api } from '../../services/api'
import { setCookie } from 'nookies'
import axios, { AxiosError } from 'axios'

type SignInFormData = {
  username?: string
  password?: string
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
  confirmPassword: yup
    .string()
    .required('Confirmar Senha obrigatória')
    .oneOf([yup.ref('password')], 'Suas senhas não conferem.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'Deve conter pelo menos 8 caracteres, um número e uma letra maiúscula',
    ),
})

export function Create() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(SignInSchema),
  })

  const router = useRouter()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    event?.preventDefault()

    try {
      const { username, password } = values

      await api.post('/users', { username, password })

      toast.success('Usuário cadastrado com sucesso!', {
        theme: 'dark',
      })

      reset()
    } catch (error) {
      console.error('aqui', error)
      let description =
        'Erro ao tentar realizar o cadasto, tente novamente mais tarde.'

      if (axios.isAxiosError(error)) {
        const err = error as AxiosError

        if (err.response?.status === 400) {
          description = 'Usuário já existe!'
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
            tabIndex={1}
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
            tabIndex={2}
            isPasswordIcon
            {...register('password')}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <span>{message}</span>}
          />
        </label>

        <label htmlFor="confirmPassword">
          Confirmar Senha
          <TextInput
            id="confirmPassword"
            placeholder="********"
            icon={<LockKey />}
            autoComplete="off"
            isPasswordIcon
            tabIndex={3}
            {...register('confirmPassword')}
          />
          <ErrorMessage
            errors={errors}
            name="confirmPassword"
            render={({ message }) => <span>{message}</span>}
          />
        </label>

        <Button disabled={formState.isSubmitting}>
          {formState.isSubmitting ? <Loading /> : 'Cadastrar'}
        </Button>
      </FormContainer>
    </Box>
  )
}
function setupAnalyticsService(arg0: string | undefined) {
  throw new Error('Function not implemented.')
}
