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

type SignInFormData = {
  email?: string
  password?: string
}

const SignInSchema = yup.object().shape({
  email: yup
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
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInSchema),
  })

  const router = useRouter()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    event?.preventDefault()
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast.warning('Success Notification Success Notification!', {
      theme: 'dark',
    })

    router.push('/home')
  }

  const { errors } = formState

  return (
    <Box>
      <ToastContainer />
      <FormContainer onSubmit={handleSubmit(handleSignIn)}>
        <label htmlFor="email">
          E-mail
          <TextInput
            id="email"
            type="email"
            placeholder="exemplo@email.com"
            icon={<EnvelopeSimple />}
            autoComplete="off"
            {...register('email')}
          />
          <ErrorMessage
            errors={errors}
            name="email"
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

        <label htmlFor="confirmPassword">
          Confirmar Senha
          <TextInput
            id="confirmPassword"
            placeholder="********"
            icon={<LockKey />}
            autoComplete="off"
            isPasswordIcon
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
