import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './Components/App'
import Router from './Components/router'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
