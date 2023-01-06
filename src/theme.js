const breakPoints = {
  sm: '576px',
  md: '768px',
  lg: '1140px',
  down: (size) => `@media only screen and (max-width: ${breakPoints[size]})`,
  up: (size) => `@media only screen and (min-width: ${breakPoints[size]})`,
};

export const lightTheme = {
  mode: 'light',
  primary: '#e1e1e2',
  secondary: '#2F2E41',
  tertiary: '#fb6169',
  primaryText: '#000',
  secondaryText: '#fff',
  breakPoints,
};

export const darkTheme = {
  mode: 'dark',
  primary: '#131313',
  secondary: '#2F2E41',
  tertiary: '#fb6169',
  primaryText: '#fff',
  secondaryText: '#000',

  breakPoints,
};
