import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CoffeeContextProvider } from './contexts/CoffeeContext'

function App() {
  return (
    <CoffeeContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </CoffeeContextProvider>
  )
}

export default App
