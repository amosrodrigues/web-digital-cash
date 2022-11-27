import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background:
      'linear-gradient(90deg, $gray900  0%, $ngcash900 50%, $gray900   100%)',
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
    backgroundColor: '$gray900',
  },
  '::-webkit-scrollbar-corner': {
    height: 0 /** */,
    border: 'none',
    background: 'none',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
    borderRadius: '25px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray600',
    borderRadius: '3px',
    cursor: 'move',
  },
})
