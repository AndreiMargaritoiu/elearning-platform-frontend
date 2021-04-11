export const color = {
  dark: {
    primary: '#000000',
    secondary: '#2D2D2E',
    tertiary: '#48484A',
    quaternary: '#8E8E93',
  },
  light: {
    primary: '#FFFFFF',
    secondary: '#F2F2F2',
    tertiary: '#D1D1D6',
    quaternary: '#AEAEB2',
  },
  accent: {
    primary: '#ED1C24',
    primaryOver: '#B41218',
    secondary: '#776915',
    tertiary: '#EFF8FA',
    quaternary: '#7C0D11',
  },
  other: {
    primary: '#008AAF',
    secondary: '#32A6A6',
    tertiary: '#e6b31e',
    quaternary: '#95D5D1',
  },
};

export const font = {
  primary: 'Lato, Graphik Condensed, sans-serif',
  secondary: 'Lato, Graphik Compact',
  tertiary: 'Lato, Graphik, sans-serif',
  quaternary: 'Lato, Miller',
  quinary: 'Merriweather, SaolText, sans-serif',
};

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '767px',
  laptop: '1025px',
  laptopM: '1280px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const queries = {
  mobileS: `screen and (max-width: ${size.mobileM})`,
  mobileM: `screen and (max-width: ${size.mobileL})`,
  mobile: `screen and (max-width: ${size.tablet})`,
  tablet: `screen and (max-width: ${size.laptop})`,
  laptopS: `screen and (max-width: ${size.laptopM})`,
  laptop: `screen and (max-width: ${size.laptopL})`,
  desktop: `screen and (max-width: ${size.desktop})`,
};
