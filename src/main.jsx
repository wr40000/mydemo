import React from 'react'
import ReactDOM from 'react-dom/client'
import Hello from './components/hello'
import Bodycomponents from './components/bodycomponents'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hello />
    <Bodycomponents/>
  </React.StrictMode>,
)
