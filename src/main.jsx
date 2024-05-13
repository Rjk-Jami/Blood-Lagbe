import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './router/router.jsx';
import { GlobalVariable } from './component/Provider/GlobalVariable.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalVariable>
    <RouterProvider router={router} />
    </GlobalVariable>
  </React.StrictMode>,
)
