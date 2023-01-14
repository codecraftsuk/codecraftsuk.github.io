const breakPoints = {
  xs: '400px',
  sm: '576px',
  md: '768px',
  ml: '950px',
  lg: '1140px',
  down: (size) => `@media only screen and (max-width: ${breakPoints[size]})`,
  up: (size) => `@media only screen and (min-width: ${breakPoints[size]})`,
};

const commonColors = {};

export const lightTheme = {
  mode: 'light',
  primary: '#fff',
  secondary: '#F6F9FC',
  tertiary: '#FB6169',
  primaryText: '#425466',
  secondaryText: '#fff',
  quaternary: '#c9b6d9',
  quinary: '#e5c3c4',
  ...commonColors,
  breakPoints,
};

export const darkTheme = {
  mode: 'dark',
  primary: '#131313',
  secondary: '#2F2E41',
  tertiary: '#FB6169',
  primaryText: '#fff',
  secondaryText: '#000',
  quaternary: '#474350',
  quinary: '#4C4B63',
  ...commonColors,
  breakPoints,
};
