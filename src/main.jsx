import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Root';
import Home from './Home';
import Login from './Login';
import Register from './Register';
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
   <RouterProvider router={router} />
  </StrictMode>,
)
