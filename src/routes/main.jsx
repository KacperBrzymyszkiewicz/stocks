import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Foo from './Foo';
  const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/profile",
    element:<Foo/>,
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
