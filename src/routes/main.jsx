import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Foo from './Foo';
import Coinpage from './Coinpage';
import Categories from './Categories';
  const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/profile",
    element:<Foo/>,
  },
  {
    path:"/coin/:coinId",
    element:<Coinpage/>,
  },
  {
    path:"/categories",
    element:<Categories/>,
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
