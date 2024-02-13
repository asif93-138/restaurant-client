import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from './Home.jsx';
import Menu from './Menu.jsx';
import Contact from './Contact.jsx';
import Order from './Order.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import AuthProvider from '../AuthProvider.jsx';
import Dashboard from './Dashboard.jsx';
import Protected from './Protected.jsx';
import Admin from './Admin.jsx';
import HomeDB from './HomeDB.jsx';
import Cart from './Cart.jsx';
import Payment from './Payment.jsx';
import PayHistory from './PayHistory.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/order",
        element: <Order />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Protected><HomeDB /></Protected>,                                  
    children: [
      {
        path: "/dashboard/home",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/admin",
        element: <Admin />
      },
      {
        path: "/dashboard/cart",
        element: <Cart />
      },
      {
        path: "/dashboard/payment",
        element: <Payment />
      },
      {
        path: "/dashboard/history",
        element: <PayHistory /> 
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
