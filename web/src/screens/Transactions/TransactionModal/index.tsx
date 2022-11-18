import * as Dialog from '@radix-ui/react-dialog'

import { X } from 'phosphor-react'
import { ActionsButton, CloseButton, Content, Overlay } from './styles'

import { Button } from '../../../components/Button'

export function TransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Confirmar Transação?</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <ActionsButton>
          <Button variant="cancel" as={Dialog.Close}>
            Não
          </Button>

          <Button>Sim</Button>
        </ActionsButton>
      </Content>
    </Dialog.Portal>
  )
}
