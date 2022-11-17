import { styled } from '../../styles'
import * as Tabs from '@radix-ui/react-tabs'
import { Box } from '../../components/Box'

export const HomeContainer = styled('main', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '$10',
  width: '90%',
  maxWidth: 1180,
  padding: '$8 0',
})

export const UserBalance = styled(Box, {
  width: 'min(90vw, 20rem)',
  display: 'flex',

  flexDirection: 'column',
  gap: '$8',

  a: {
    fontSize: '$lg',

    svg: {
      width: '$6',
      height: '$6',
    },
  },
})

export const Profile = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  height: '100%',
  borderBottom: '1px solid $gray500',
  padding: '0 0 $6',

  h2: {
    fontSize: '$lg',
  },

  p: {
    color: '$gray200',
    lineHeight: '$shorter',

    display: '-webkit-box',
    maxWidth: '18rem',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
})

export const Balance = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid $gray500',
  padding: '0 0 $5',

  span: {
    fontSize: '$xl',
    fontWeight: '$medium',
  },
})

export const TabsRoot = styled(Tabs.Root, {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',

  overflowX: 'auto',

  // boxShadow: '0 2px 10px $gray600',
  borderRadius: '$md',
  border: '1px solid $gray600',

  backgroundColor: '$gray800',
})

export const TabsList = styled(Tabs.List, {
  flexShrink: '0',
  display: 'flex',
  borderBottom: '1px solid $gray500',
})

export const TabsTrigger = styled(Tabs.Trigger, {
  fontFamily: 'inherit',
  backgroundColor: '$gray800',
  padding: '$4',

  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',

  fontSize: '$lg',
  color: '$gray100',
  cursor: 'pointer',
  border: 0,

  '&:first-child': {
    borderTopLeftRadius: '$sm',
    '&:not([data-state="inactive"])': {
      color: '$ngcash300',
      boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
      transition: 'all 0.2s linear',
    },
  },

  '&:last-child': {
    borderTopRightRadius: '$sm',
    '&:not([data-state="inactive"])': {
      color: '$ngcash300',
      boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
      transition: 'all 0.2s linear',
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
  borderBottomLeftRadius: '$sm',
  borderBottomRightRadius: '$sm',
  outline: 'none',

  p: {
    textAlign: 'center',
  },
})
