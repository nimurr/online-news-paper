import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home/Home.jsx';
import ViewDetailsnews from './Components/Header/ViewDetailsnews.jsx';
import LocalNews from './Components/Cetagory/LocalNews.jsx';
import InternationalNews from './Page/International/InternationalNews.jsx';
import Sports from './Page/Sports/Sports.jsx';
import Politics from './Page/Politics/Politics.jsx';
import Errorpage from './Page/Errorpage/Errorpage.jsx';
import AuthProviter from './AuthProviter/AuthProviter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errorpage></Errorpage>,
    element: <App></App>,
    children: [
      {
        path: '/',
        loader: () => fetch('Allnews.json'),
        element: <Home></Home>
      },
      {
        path: '/:id',
        loader: () => fetch('Allnews.json'),
        element: <ViewDetailsnews></ViewDetailsnews>
      },
      {
        path: '/local',
        loader: () => fetch('Allnews.json'),
        element: <LocalNews></LocalNews>
      },
      {
        path: '/international',
        loader: () => fetch('Allnews.json'),
        element: <InternationalNews></InternationalNews>
      },
      {
        path: '/sports',
        loader: () => fetch('Allnews.json'),
        element: <Sports></Sports>
      },
      {
        path: '/politics',
        loader: () => fetch('Allnews.json'),
        element: <Politics></Politics>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviter>
      <RouterProvider router={router} />
    </AuthProviter>
  </React.StrictMode>,
)
