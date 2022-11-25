import { styled } from '../../styles'

export const SignInContainer = styled('main', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '$10',
  width: '90%',
  maxWidth: 1180,

  '@bp3': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$1',
  },

  '@bp1': {
    padding: '$4 0',
    width: '100%',
  },
})

export const SectionCreate = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '$8 $4',
  gap: '$4',
  width: 'min(90%, 28rem)',

  boxShadow: '0 2px 10px $gray400',

  a: {
    marginTop: '$4',
  },

  '> h2': {
    fontSize: '$2xl',
  },

  '> p': {
    color: '$gray200',
  },

  '@bp3': {
    '> h2': {
      fontSize: '$xl',
    },
  },

  '@bp2': {
    '> h2': {
      fontSize: '$lg',
    },
  },

  '@bp1': {
    padding: '$4 0',

    '> h2': {
      fontSize: '$md',
    },

    '> p': {
      fontSize: '$sm',
    },
  },
})

export const SectionSignIn = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$8 $4',
  width: 'min(90%, 28rem)',
  boxShadow: '0 2px 10px $gray400',

  '> p': {
    color: '$gray200',
  },

  '> h2': {
    marginBottom: '$4',
    fontSize: '$2xl',
  },

  '@bp3': {
    '> h2': {
      fontSize: '$xl',
    },
  },

  '@bp2': {
    '> h2': {
      fontSize: '$lg',
    },
  },

  '@bp1': {
    padding: '$4 0',

    '> h2': {
      fontSize: '$md',
    },

    '> p': {
      fontSize: '$sm',
    },
  },
})
