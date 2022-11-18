import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '../../../styles'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  minWidth: '28rem',
  borderRadius: '$md',
  padding: '2.5rem 3rem',
  background: '$gray800',
  textAlign: 'center',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  borderRadius: '$sm',
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray400',

  '&:hover': {
    color: '$gray200',
  },
})

export const ActionsButton = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$4',
  marginTop: '$8',

  button: {
    fontSize: '$xl',
  },
})
