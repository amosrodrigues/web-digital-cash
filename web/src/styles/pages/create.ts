import { styled } from '../../styles'

export const CreateContainer = styled('main', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '$10',
  width: '90%',
  maxWidth: 1180,
})

export const SectionCreate = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$8 $4',
  width: 'min(90%, 28rem)',
  boxShadow: '0 2px 10px $gray400',

  '> h2': {
    marginBottom: '$2',
    fontSize: '$2xl',
  },

  a: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginTop: '$8',

    gap: '$2',
    fontWeight: '$bold',

    'svg, p': {
      color: '$ngcash500',
    },

    ':hover': {
      color: '$ngcash300',
    },
  },
})
