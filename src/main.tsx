import './index.scss'

import App from './App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './contexts/ThemeContext'
import { ViewStyleProvider } from './contexts/ViewStyleContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ViewStyleProvider>
        <App />
      </ViewStyleProvider>
    </ThemeProvider>
  </React.StrictMode>,
)