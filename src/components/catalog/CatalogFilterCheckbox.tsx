import * as React from 'react';
import { styled } from '@mui/material/styles';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';

const BpIcon = styled('span')(({ theme }) => ({
  padding: 0,
  borderRadius: 2,
  width: 20,
  height: 20,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  padding: 0,
  backgroundImage: 'linear-gradient(135deg, #4aff0b 0%, #00e5ff 100%)',
  '&::before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.71528 2.06587C1.32932 1.67083 0.696202 1.66347 0.301163 2.04943C-0.0938755 2.43538 -0.101237 3.06851 0.28472 3.46354L4.42265 7.69884C4.81497 8.10039 5.46089 8.10039 5.85321 7.69884L11.7153 1.69884C12.1012 1.3038 12.0939 0.670677 11.6988 0.28472C11.3038 -0.101237 10.6707 -0.0938755 10.2847 0.301163L5.13793 5.56905L1.71528 2.06587Z' fill='white'/%3E%3C/svg%3E\")",
    content: '""',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

export function CatalogFilterCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
        padding: 0, // убираем паддинг
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}
