import { styled } from '../../../styles'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const SearchContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'flex-end',
  // gap: '$4',
  padding: '$4 0 0',

  button: {
    fontSize: '$md',
    marginTop: '$5',

    '&:disabled': {
      svg: {
        display: 'none',
      },
    },
  },

  '> div': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '$4',
  },
})

export const DateContainer = styled('div', {
  display: 'flex',
  // flexDirection: 'column',
  gap: '$4',

  'input[type="date"]': {
    color: '$white',
    fontSize: '$md',
    background: 'transparent',

    outline: 'none',
    padding: 0,
  },

  'label div': {
    // padding: '$1',
    marginTop: '$1',
    background: 'transparent',
    border: '2px solid $gray600',
  },

  label: {
    // paddingTop: '$2',
  },

  'input[type="date"]::-webkit-calendar-picker-indicator': {
    // padding: '0px',
    // margin: '0px',
    filter: 'invert(1)',
    // display: 'none',
  },
})

export const TypesContainer = styled('div', { flex: 1 })

export const TransactionType = styled(RadioGroup.Root, {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
  // marginTop: '0.5rem',
})

export const TransactionTypeButton = styled(RadioGroup.Item, {
  background: '$gray700',
  padding: '0.865rem 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  borderRadius: '6px',
  cursor: 'pointer',
  border: 0,
  color: '$gray200',

  variants: {
    variant: {
      debited: {
        svg: {
          color: '$red500',
        },

        '&[data-state="checked"]': {
          color: '$white',
          background: '$red500',
          svg: {
            color: '$white',
          },
        },
      },
      credited: {
        svg: {
          color: '$ngcash500',
        },

        '&[data-state="checked"]': {
          color: '$white',
          background: '$ngcash500',
          svg: {
            color: '$white',
          },
        },
      },

      all: {
        svg: {
          color: '$gray200',
        },

        '&[data-state="checked"]': {
          color: '$white',
          background: '$gray500',
          svg: {
            color: '$white',
          },
        },
      },
    },
  },

  '&[data-state="unchecked"]:hover': {
    background: '$gray600',
    transition: 'background-color 0.2s',
  },
})
export const RadioGroupIndicator = styled(RadioGroup.Indicator, {})
