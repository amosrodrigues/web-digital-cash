import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '../../styles'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  width: 'min(90vw, 28rem)',
  borderRadius: '$md',
  padding: '3rem 2.5rem 2.5rem',
  background: '$gray800',
  textAlign: 'center',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  h2: {
    fontWeight: '$medium',
    lineHeight: '$base',
  },

  p: {
    fontSize: '$xl',
    marginTop: '$6',
  },

  '@bp1': {
    h2: {
      fontSize: '$lg',
    },

    p: {
      fontSize: '$md',
    },
  },
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
  marginTop: '$10',

  'button, a': {
    fontSize: '$xl',
  },

  '@bp1': {
    marginTop: '$8',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '$4',
  },
})
