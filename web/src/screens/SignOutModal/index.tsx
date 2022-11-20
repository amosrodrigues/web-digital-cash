import * as Dialog from '@radix-ui/react-dialog'

import { X } from 'phosphor-react'
import { ActionsButton, CloseButton, Content, Overlay } from './styles'

import { Button } from '../../components/Button'
import Link from 'next/link'

export function SignOutModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>
          Obrigado por utilizar a Cateira Digital NG.CASH!
        </Dialog.Title>
        <Dialog.Description>Você deseja realmente sair?</Dialog.Description>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <ActionsButton>
          <Button variant="cancel" as={Dialog.Close}>
            Não
          </Button>
          <Button as={Link} href="/">
            Sim
          </Button>
        </ActionsButton>
      </Content>
    </Dialog.Portal>
  )
}
