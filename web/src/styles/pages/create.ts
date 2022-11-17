import { styled } from '../../styles'
import * as Tabs from '@radix-ui/react-tabs'

export const AppContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
})

export const TabsRoot = styled(Tabs.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: 'min(90vw, 28rem)',
  boxShadow: '0 2px 10px $gray400',
})

export const TabsList = styled(Tabs.List, {
  flexShrink: '0',
  display: 'flex',
  borderBottom: '1px solid $gray500',
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
  fontSize: '$lg',
  lineHeight: '$base',
  color: '$gray100',
  userSelect: 'none',
  cursor: 'pointer',
  border: 0,

  '&:first-child': {
    borderTopLeftRadius: '$sm',
    '&:not([data-state="inactive"])': {
      color: '$ngcash300',
      boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
    },
  },

  '&:last-child': {
    borderTopRightRadius: '$sm',
    '&:not([data-state="inactive"])': {
      color: '$ngcash300',
      boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
    },
  },

  '&:hover': {
    color: '$ngcash500',
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

  p: {
    textAlign: 'center',
  },
})
