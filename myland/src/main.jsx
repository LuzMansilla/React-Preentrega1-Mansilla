import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initFirebase } from './Firebase/Firebase'

initFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
