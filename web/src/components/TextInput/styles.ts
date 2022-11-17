import { getParseTreeNode } from 'typescript'
import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  '&:has(input:focus)': {
    borderColor: '$ngcash300',

    svg: {
      color: '$ngcash300',
    },
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '> svg': {
    position: 'absolute',
    width: '$5',
    height: '$5',
    color: '$gray400',
    transition: 'color 0.2s',

    '&:hover': {
      filter: 'brightness(0.8)',
    },
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },

  variants: {
    size: {
      iconLeft: {
        paddingLeft: '$10',
      },
      iconRight: {
        paddingLeft: '$10',
        paddingRight: '$10',
      },
      reset: {
        paddingLeft: 0,
      },
    },
  },
})

export const ButtonShow = styled('button', {
  all: 'unset',
  right: '$4',
  bottom: '$3',
  cursor: 'pointer',

  position: 'absolute',
  width: '$5',
  height: '$5',
  color: '$gray400',
  transition: 'color 0.2s',

  '&:hover': {
    filter: 'brightness(0.8)',
  },

  svg: {
    width: '100%',
    height: '100%',
  },
})
