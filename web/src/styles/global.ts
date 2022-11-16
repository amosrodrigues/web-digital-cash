import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  '::-webkit-scrollbar': {
    width: '0.375rem',
    height: '0.375rem',
    marginRight: '10px',
  },
  '::-webkit-scrollbar-corner': {
    border: 'none',
    background: 'none',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#3D3C42',
    borderRadius: '3px',
    cursor: 'move',
  },
})
