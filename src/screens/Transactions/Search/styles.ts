import { styled } from '../../../styles';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const SearchContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
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

  '@bp1': {
    fontSize: '$sm',
  },
});

export const SearchOptions = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$4',

  '@bp4': {
    flexDirection: 'column',
    gap: '$1',
  },
});

export const SearchActions = styled('div', {
  display: 'flex',
  gap: '$4',

  'button:first-child': {
    flex: 1,
  },
});

export const DateContainer = styled('div', {
  display: 'flex',
  gap: '$4',

  'input[type="date"]': {
    color: '$white',
    fontSize: '$md',
    outline: 'none',
    padding: 0,

    '@bp1': {
      fontSize: '$sm',
    },
  },

  'label div': {
    marginTop: '$1',
  },

  'input[type="date"]::-webkit-calendar-picker-indicator': {
    filter: 'invert(1)',
  },

  '@bp4': {
    width: '100%',

    label: {
      flex: 1,
    },
  },

  '@bp1': {
    flexDirection: 'column',
  },
});

export const TypesContainer = styled('div', {
  flex: 1,

  '@bp4': {
    width: '100%',

    label: {
      flex: 1,
    },
  },
});

export const TransactionType = styled(RadioGroup.Root, {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
});

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
          background: '$red600',
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

  '@bp1': {
    flexDirection: 'column',
    padding: '0.5rem',
  },
});
