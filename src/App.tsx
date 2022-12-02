import { ThemeProvider } from 'styled-components';
import Header from './components/molecules/Header';
import Router from './router/Router';
import { Container } from './styles/container';
import GlobalStyles from './styles/global';
import theme from './styles/theme'
import { Wrapper } from './styles/wrapper';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container>
          <Header />
          <Router />   
        </Container>
      </Wrapper>
      <GlobalStyles />  
    </ThemeProvider>
  );
}

export default App;
