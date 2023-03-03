import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { styled } from '../../styles';

export const DropdownMenuRoot = styled(DropdownMenu.Root, {});

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger, {
  all: 'unset',
  cursor: 'pointer',
  padding: '$2 $3',
  backgroundColor: '$gray700',
  borderRadius: '$sm',

  '> svg': {
    color: '$ngcash500',
  },

  '&:hover': {
    '> svg': {
      color: '$ngcash300',
    },
  },
});

export const DropdownMenuPortal = styled(DropdownMenu.Portal, {});

export const DropdownMenuContent = styled(DropdownMenu.Content, {
  padding: '$3',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
});

export const DropdownMenuItem = styled(DropdownMenu.Item, {
  all: 'unset',
  borderRadius: '$md',
  cursor: 'pointer',
  padding: '$2',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '> a svg, svg': {
    color: '$gray200',
  },

  '&:hover': {
    background: '$gray700',
    '> svg, a svg': {
      color: '$gray100',
    },
  },
});

export const DropdownMenuArrow = styled(DropdownMenu.Arrow, {
  fill: '$gray600',
});

export const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
  height: '$12',
  width: '2px',
  background: '$gray600',
  margin: '$1',
});
