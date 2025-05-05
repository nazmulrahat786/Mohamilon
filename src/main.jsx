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
import Oders from './Oders';
import Profile from './Profile';
import PrivetRoute from './PrivetRoute';
import DB from './DB';








const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   children:[
    {index:true, Component:Home}
    ,
    {path:'/login' ,Component: Login},
    {path:'/register' ,Component: Register},
    {path:'/oders' ,
      element: 
      <PrivetRoute>
        <Oders></Oders>
        </PrivetRoute>
    },
    {path:'/profile' , element:
    <PrivetRoute>
      <Profile></Profile>
    </PrivetRoute>},
    {path:'/db' , element:
    <PrivetRoute>
      <DB></DB>
    </PrivetRoute>},
   
    
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
