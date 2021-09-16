import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Theme } from "components";
const GlobalStyle = createGlobalStyle`
html{
 
}
body{
  margin: 0px;  
  font-family: 'Roboto', sans-serif;
  }
`;
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
