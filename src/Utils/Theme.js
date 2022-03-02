import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "Helvetica Neue",
    body: "Helvetica Neue",
  },

  colors: {
    blue: {
      blue500: '#211f5c',
      blue400: '#2C346D',
      blue300: '#3A4A7E',
      blue200: '#6689BB',
      blue100: '#78AADB',
    },
    red: {
      red500: '#EE4223',
      red400: '#F05C36',
      red300: '#F06944',
      red200: '#F3937A',
      red100: '#F5BDB7',
    },
    orange: {
      orange500: '#F5862E',
      orange400: '#F79749',
      orange300: '#FBBA7F',
      orange200: '#FCC38D',
      orange100: '#FEE8C9',
    },
    gray: {
      gray500: '#524F4E',
      gray400: '#606060',
      gray300: '#858383',
      gray200: '#C0C0C1',
      gray100: '#E7E8E9',
    },
    background: '#C4C4C4',
    green: '#38890B',
    white: '#FFFFFF',
    black: '#000000',
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
});

export default theme;