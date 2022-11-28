import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '90%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  borderBottom: '1px solid $gray600',

  svg: {
    color: '$ngcash300',
  },

  'div p:first-child': {
    fontSize: '$2xl',
    lineHeight: '$shorter',

    span: {
      color: '$ngcash300',
    },
  },

  'div p:last-child': {
    fontSize: '$sm',
    lineHeight: '$shorter',
    color: '$gray400',
  },
})
