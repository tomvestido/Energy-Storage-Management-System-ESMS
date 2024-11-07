import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EnergyPriceList from './EnergyPriceList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EnergyPriceList />
  </StrictMode>,
)
