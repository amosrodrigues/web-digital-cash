import { EnvelopeSimple, LockKey } from 'phosphor-react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../Button'
import { TextInput } from '../TextInput'
import { FormContainer } from './styles'

import { ErrorMessage } from '@hookform/error-message'

import * as yup from 'yup'
import { Loading } from '../Loading'

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
    .min(8, 'No mínimo 8 caracteres'),
})

export function Create() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInSchema),
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    event?.preventDefault()
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  const { errors } = formState

  return (
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

      <Button disabled={formState.isSubmitting}>
        {formState.isSubmitting ? <Loading /> : 'Cadastrar'}
      </Button>
    </FormContainer>
  )
}
