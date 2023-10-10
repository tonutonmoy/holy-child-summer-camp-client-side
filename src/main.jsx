import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProvider from './Provider/AuthProvider';



import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import AOS from 'aos';
AOS.init();

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>

      <QueryClientProvider client={queryClient}>

        <RouterProvider router={router} />

      </QueryClientProvider>


    </AuthProvider>
    
  </React.StrictMode>,
)
