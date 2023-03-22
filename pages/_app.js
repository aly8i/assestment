import "../styles/index.css";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Layout from "../components/Layout";
export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      type: 'dark',
      white: {
        main: '#ffffff',
      },
      secondary: {
        main: '#ffffff',
      },
    },
  });
  return (
    <>
      <Head>
        <title>aLi's AsSeStMeNt</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StyledEngineProvider>
        <ThemeProvider theme={theme}>
          <Layout>
             <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StyledEngineProvider>
      </>
  );
}
