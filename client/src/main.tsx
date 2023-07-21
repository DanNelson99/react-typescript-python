import React from 'react'

//Support
import ReactDOM from 'react-dom/client'

//Custom
import App from "./App.tsx"

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
