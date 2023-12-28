import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { Router } from './Router'
import '../assets/css'

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
        <Router />
      </BrowserRouter>
    </CookiesProvider>
  )
}

export { App }
