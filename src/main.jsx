import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Root';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import AuthProvider from './AuthProvider';








const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   children:[
    {index:true, Component:Home}
    ,
    {path:'/login' ,Component: Login},
    {path:'/register' ,Component: Register},
   
    
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>

  </StrictMode>,
)
