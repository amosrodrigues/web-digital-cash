import { styled } from '../../styles'

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',
  },

  button: {
    marginTop: '$6',
    fontSize: '$lg',
  },

  span: {
    color: '$red500',
    fontWeight: '$regular',
  },
})
