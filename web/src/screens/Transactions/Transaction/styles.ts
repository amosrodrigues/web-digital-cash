import { styled } from '../../../styles'

export const TransactionContainer = styled('form', {
  display: 'flex',
  gap: '$4',
  padding: '$4 0 $4',

  'label[for="email"]': {
    flex: 1,
  },

  'label > span': {
    color: '$red500',
  },

  'input[name="cash"]': {
    // width: '$20',
  },

  'label[for="cash"] span': {
    marginRight: '$2',
  },

  button: {
    fontSize: '$md',
  },
})
