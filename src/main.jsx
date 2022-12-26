import React from 'react'
import ReactDOM from 'react-dom/client'
import { DoffotDefi } from './DoffotDefi'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter >
    <DoffotDefi />
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
)
