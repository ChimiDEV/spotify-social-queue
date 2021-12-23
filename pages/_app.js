import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#24a148',
    },
    info: {
      main: '#24a148',
    },
    text: {
      primary: '#fff',
      secondary: '#dde1e6',
      disabled: '#c1c7cd',
    },
    action: {
      hover: '#c1c7cd',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
