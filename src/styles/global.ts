import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    overflow-x: hidden;
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }
  button {
    background-color: transparent;
    border: none;
  }
  a {
    text-decoration:none;
    &:hover, &:focus, &:active {
      cursor: pointer;
    }
  }
`

export default GlobalStyles