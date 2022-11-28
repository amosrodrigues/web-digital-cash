import { styled } from '../../../styles'

export const TransactionContainer = styled('div', {
  paddingTop: '$3',
})

export const FormContent = styled('form', {
  display: 'flex',
  gap: '$4',
  padding: '$6 0 $4',

  'label[for="username"]': {
    flex: 1,
  },

  'label > span': {
    color: '$red500',
  },

  'label[for="cash"] span': {
    marginRight: '$2',
  },

  button: {
    fontSize: '$md',
  },

  '> div': {
    display: 'flex',
    gap: '$4',
  },

  '@bp4': {
    'input[name="cash"]': {
      width: '$20',
    },
  },

  '@bp3': {
    flexDirection: 'column',
    '> div': {
      width: '100%',

      label: {
        flex: 1,
      },
    },
  },

  '@bp1': {
    flexDirection: 'column',
    '> div': {
      flexDirection: 'column',

      label: {
        flex: 1,
      },
    },
  },
})

export const StatusContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$10',

  '@bp3': {
    gap: '$6',
  },

  '@bp1': {
    gap: 0,
  },
})

export const AnimationIcons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray400',

  '> svg': {
    marginTop: '$2',
  },

  '> div': {
    display: 'flex',
    justifyContent: 'center',

    width: '14rem',
    height: '$6',
    color: '$gray400',
    fontWeight: '$bold',
    fontSize: '$xl',
  },

  '@bp1': {
    width: '8rem',
  },
})

export const IconImage = styled('div', {
  display: 'flex',
  variants: {
    active: {
      true: {
        color: '$ngcash500',
      },
      false: {
        color: '$gray400',
      },
    },
  },
  defaultVariants: {
    active: 'true',
  },
})
