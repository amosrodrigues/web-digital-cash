import { styled } from '../../styles';

export const ReportContainer = styled('div', {
  display: 'flex',
  marginTop: '$5',

  alignItems: 'center',
  justifyContent: 'center',
  padding: '$2 $3',

  // width: '100%',
  // padding: '0 $5',
  color: '$ngcash300',
  borderRadius: '$sm',
  // border: '2px solid $ngcash500',
  backgroundColor: '$gray700',
});

export const ReportButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  color: '$gray200',
});
