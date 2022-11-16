import { styled } from '@stitches/react'

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',
  },

  button: {
    marginTop: '$6',
    fontSize: '$md',
  },
})
