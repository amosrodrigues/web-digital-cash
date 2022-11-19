import { styled } from '../../../styles'

export const TableContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',

  marginTop: '$4',

  borderRadius: '$md',

  backgroundColor: '$gray800',
})

export const TransactionsTable = styled('table', {
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: '0 0.5rem',

  td: {
    padding: '1.25rem 2rem',
    background: '$gray700',

    '&:first-child': {
      borderTopLeftRadius: '6px',
      borderBottomLeftRadius: '6px',
    },

    '&:last-child': {
      borderTopRightRadius: '6px',
      borderBottomRightRadius: '6px',
      textAlign: 'right',
    },
  },

  th: {
    padding: '1.25rem 2rem',
    background: '$gray700',

    '&:first-child': {
      borderTopLeftRadius: '6px',
      borderBottomLeftRadius: '6px',
    },

    '&:last-child': {
      borderTopRightRadius: '6px',
      borderBottomRightRadius: '6px',
      textAlign: 'right',
    },

    '&:not(:last-child)': {
      textAlign: 'left',
    },
  },
})

export const PriceHighlight = styled('span', {
  variants: {
    variant: {
      credited: {
        color: '$ngcash300',
      },
      debited: {
        color: '$red500',
      },
    },
  },
  defaultVariants: {
    variant: 'credited',
  },
})
