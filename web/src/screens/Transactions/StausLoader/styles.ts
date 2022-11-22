import { styled, keyframes } from '../../../styles'

const ldsSpinner = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
})

export const LoadinContainer = styled('div', {
  height: '100%',
  width: '100%',

  '.lds-spinner': {
    color: 'official',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    height: '$4',
    gap: '$4',
    paddingRight: '$3',
  },

  '.lds-spinner div': {
    transformOrigin: '40px 40px',
    animation: `${ldsSpinner} 1.2s linear infinite`,
  },

  '.lds-spinner div:after': {
    content: '$',
    display: 'block',
    position: 'absolute',
    width: '6px',
    height: '18px',
    borderRadius: '20%',
    color: '$ngcash300',
    fontWeight: '$bold',
    fontSize: '$xl',
  },

  '.lds-spinner div:nth-child(1)': {
    animationDelay: '-1.1s',
  },

  '.lds-spinner div:nth-child(2)': {
    animationDelay: '-1s',
  },

  '.lds-spinner div:nth-child(3)': {
    animationDelay: '-0.9s',
  },

  '.lds-spinner div:nth-child(4)': {
    animationDelay: '-0.8s',
  },

  '.lds-spinner div:nth-child(5)': {
    animationDelay: '-0.7s',
  },

  '.lds-spinner div:nth-child(6)': {
    animationDelay: '-0.6s',
  },

  '.lds-spinner div:nth-child(7)': {
    animationDelay: '-0.5s',
  },

  '.lds-spinner div:nth-child(8)': {
    animationDelay: '-0.4s',
  },

  '.lds-spinner div:nth-child(9)': {
    animationDelay: '-0.3s',
  },

  '.lds-spinner div:nth-child(10)': {
    animationDelay: '-0.2s',
  },

  '.lds-spinner div:nth-child(11)': {
    animationDelay: '-0.1s',
  },

  '.lds-spinner div:nth-child(12)': {
    animationDelay: '0s',
  },
})
