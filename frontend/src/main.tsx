import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SaasProvider } from '@saas-ui/react'
import {
  Card,
  CardContainer,
  CardHeader,
  CardTitle,
  CardMedia,
  CardBody,
  CardFooter,
} from '@saas-ui/react'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <SaasProvider>
    <App />
    </SaasProvider>
  </React.StrictMode>,
);