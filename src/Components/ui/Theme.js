import { createTheme } from '@mui/material/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686';
const arcBlack = '#000000';

export default createTheme({
  palette: {
    background: {
      default: `${arcBlack}`,
    },
    common: {
      arcBlack: `${arcBlack}`,
      arcGrey: `${arcGrey}`,
    },
    primary: {
      main: `${arcBlack}`,
    },
    secondary: {
      main: `${arcGrey}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Copperplate',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'CopperPlate',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
  },
});
