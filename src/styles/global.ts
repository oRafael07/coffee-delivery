import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  body {
    background: #ffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, textarea, button {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ::-webkit-scrollbar {
    background: transparent;
    width: 3px;
  }

  ::-webkit-scrollbar-corner {
    width: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #DBAC2C;
    border-radius: 3px;
    border: none;
  }

  ::-webkit-scrollbar-track {
    box-shadow: transparent 0px 0px 1px inset;
  }
`
