import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/modules/Header'
import { Container } from './styles/container'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { Wrapper } from './styles/wrapper'
import { BrowserRouter, Switch } from 'react-router-dom'
import CartItenProvider from './context/cartItens.context'



type applicationProps = {
  children: JSX.Element;
}

const ApplicationProviders: React.FC<applicationProps> = ({ children }) => {
  return(
    <CartItenProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Switch>
          <Wrapper>
            <Container>              
              <Header />
                {children}
              </Container>
            </Wrapper>
            </Switch>
            <GlobalStyles />
        </BrowserRouter>
      </ThemeProvider>
    </CartItenProvider>
  )
}

export default ApplicationProviders