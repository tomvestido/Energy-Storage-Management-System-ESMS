import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainComp from './components/MainComp.jsx'
import Menu from './components/Menu.jsx';
import MainPage from './components/pages/MainPage.jsx';
document.documentElement.setAttribute(
  'data-theme',
  localStorage.getItem('theme') || 'light'
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainComp />
  </StrictMode>,
)
