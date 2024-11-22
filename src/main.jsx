import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Store from './Components/Root Component/Store';
import Error from './Components/Error Pages/Error';
import Home from './Components/Home Page/Home';
import Tabscategories from './Components/CoffeCategories/Tabscategories';
import Coffedetails from './Components/Coffe Details/Coffedetails';
import Coffepage from './Components/Coffe Page/Coffepage';
import Deshbord from './Components/Deshbord page/Deshbord';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Store></Store>,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader : () => fetch("../categories.json"),
        children: [
          {
            path:"/",
            element: <Tabscategories></Tabscategories>,
            loader : () => fetch("../coffes.json"),
          },
          {
            path:"/category/:categoryId",
            element: <Tabscategories></Tabscategories>,
            loader : () => fetch("../coffes.json"),
          },
        ],
      },
      {
        path:"/coffe/:coddeId",
        element: <Coffedetails></Coffedetails>,
        loader : () => fetch("../coffes.json"),
      },
      {
        path:"/coffe",
        element:<Coffepage></Coffepage>
      },
      {
        path:"/deshbord",
        element: <Deshbord></Deshbord>,
        loader : () => fetch("../coffes.json"),
      }
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
