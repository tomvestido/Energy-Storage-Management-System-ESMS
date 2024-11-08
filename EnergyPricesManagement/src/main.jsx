import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainComp from './components/MainComp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainComp />
  </StrictMode>,
)
