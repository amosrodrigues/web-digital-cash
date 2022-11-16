import { styled, keyframes } from '../../styles'

const ldsEllipsis1 = keyframes({
  '0%': {
    transform: 'scale(0)',
  },
  '100%': {
    transform: 'scale(1)',
  },
})

const ldsEllipsis3 = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '100%': {
    transform: 'scale(0)',
  },
})

const ldsEllipsis2 = keyframes({
  '0%': {
    transform: 'translate(0, 0)',
  },
  '100%': {
    transform: 'translate(24px, 0)',
  },
})

export const LoadinContainer = styled('div', {
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '.lds-ellipsis': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    position: 'relative',
    padding: '0.7rem 2.5rem',
  },

  '.lds-ellipsis div': {
    position: 'absolute',
    width: '13px',
    height: '13px',
    borderRadius: '50%',
    background: '$ngcash700',
    animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
  },

  '.lds-ellipsis div:nth-child(1)': {
    left: '8px',
    animation: `${ldsEllipsis1} 0.6s infinite`,
  },

  '.lds-ellipsis div:nth-child(2)': {
    left: '8px',
    animation: `${ldsEllipsis2} 0.6s infinite`,
  },

  '.lds-ellipsis div:nth-child(3)': {
    left: '32px',
    animation: `${ldsEllipsis2} 0.6s infinite`,
  },

  '.lds-ellipsis div:nth-child(4)': {
    left: '56px',
    animation: `${ldsEllipsis3} 0.6s infinite`,
  },
})
