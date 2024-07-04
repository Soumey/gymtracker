import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Deck from './Deck.tsx';
import TestSite from './TestSite.tsx';
import Layout from './Layout.tsx';
import Login  from './components/Login.tsx';
import Register from './components/Register.tsx';
import Exercises from './Exercises.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/exercises/decks/:deckId',
        element: <Deck />,
      },
      {
        path: 'Home',
        element: <TestSite />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'exercises',
        element: <Exercises />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  
   <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
