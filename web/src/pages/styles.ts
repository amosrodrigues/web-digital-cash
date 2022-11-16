import { styled } from '../styles'
import * as Tabs from '@radix-ui/react-tabs'

export const AppContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',

  border: '2px solid $ngcash300',

  // '> div': {
  //   height: '500px',
  //   width: '500px',
  //   border: '2px solid $ngcash300',
  // },
})

export const TabsRoot = styled(Tabs.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  boxShadow: '0 2px 10px $gray400',
})

export const TabsList = styled(Tabs.List, {
  flexShrink: '0',
  display: 'flex',
  borderBottom: '1px solid $ngcash300',
})

export const TabsTrigger = styled(Tabs.Trigger, {
  fontFamily: 'inherit',
  backgroundColor: '$gray800',
  padding: '0 20px',
  height: '45px',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$md',
  lineHeight: '$base',
  color: '$white',
  userSelect: 'none',
  cursor: 'pointer',

  outline: 'none',

  '&:first-child': {
    borderTopLeftRadius: '$sm',
  },

  '&:last-child': {
    borderTopRightRadius: '$sm',
  },

  '&:hover': {
    color: '$ngcash500',
  },

  "&:[data-state='active']": {
    color: '$ngcash300',
    boxShadow: 'inset 0 -1px 0 0 $ngcash300, 0 1px 0 0 $ngcash300',
  },

  '&:focus': {
    position: 'relative',
    boxShadow: '0 0 0 2px $ngcash500',
  },
})

export const TabsContent = styled(Tabs.Content, {
  flexGrow: '1',
  padding: '20px',
  backgroundColor: '$gray600',
  borderBottomLeftRadius: '$sm',
  borderBottomRightRadius: '$sm',
  outline: 'none',

  '&:focus': {
    boxShadow: '0 0 0 2px black',
  },
})
