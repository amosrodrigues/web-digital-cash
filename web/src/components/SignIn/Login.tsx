import { FormEvent } from 'react'
import { Button } from '../Button'
import { TextInput } from '../TextInput'
import { FormContainer } from './styles'

export function Login() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label htmlFor="email">
        E-mail
        <TextInput
          id="email"
          placeholder="exemplo@email.com"
          autoComplete="off"
        />
      </label>
      <label htmlFor="password">
        Senha
        <TextInput id="password" placeholder="********" />
      </label>
      <Button>Entrar</Button>
    </FormContainer>
  )
}
