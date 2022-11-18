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
    marginBottom: '$4',
    fontSize: '$2xl',
  },

  a: {
    marginTop: '$5',
    fontWeight: '$medium',
    fontSize: '$md',

    color: '$ngcash500',
  },
})
