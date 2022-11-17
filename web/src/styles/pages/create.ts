import { styled } from '../../styles'
import * as Tabs from '@radix-ui/react-tabs'

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
  alignItems: 'flex-start',
  padding: '$8 $4',
  gap: '$4',
  width: 'min(90%, 28rem)',

  boxShadow: '0 2px 10px $gray400',

  a: {
    marginTop: '$4',
  },

  '> h2': {
    fontSize: '$lg',
  },

  '> p': {
    color: '$gray200',
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
    marginBottom: '$2',
    fontSize: '$lg',
  },
})

// export const TabsTrigger = styled(Tabs.Trigger, {
//   fontFamily: 'inherit',
//   backgroundColor: '$gray800',
//   padding: '0 20px',
//   height: '45px',
//   flex: '1',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontSize: '$lg',
//   lineHeight: '$base',
//   color: '$gray100',
//   userSelect: 'none',
//   cursor: 'pointer',
//   border: 0,

//   '&:first-child': {
//     borderTopLeftRadius: '$sm',
//     '&:not([data-state="inactive"])': {
//       color: '$ngcash300',
//       boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
//     },
//   },

//   '&:last-child': {
//     borderTopRightRadius: '$sm',
//     '&:not([data-state="inactive"])': {
//       color: '$ngcash300',
//       boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
//     },
//   },

//   '&:hover': {
//     color: '$ngcash500',
//   },

//   '&:focus': {
//     position: 'relative',
//     boxShadow: '0 0 0 2px $ngcash500',
//   },
// })

// export const TabsContent = styled(Tabs.Content, {
//   flexGrow: '1',
//   padding: '20px',
//   backgroundColor: '$gray600',
//   borderBottomLeftRadius: '$sm',
//   borderBottomRightRadius: '$sm',
//   outline: 'none',

//   p: {
//     textAlign: 'center',
//   },
// })
