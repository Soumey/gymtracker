import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from 'react-hot-toast';
import {UserContextProvider} from '../context/userContext'

import './Layout.css';

const Layout: React.FC = () => {
  return (
    <UserContextProvider>
    <div className="layout-container">
      <Header />
      <Toaster position='bottom-center' toastOptions={{ duration: 2000 }} />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  </UserContextProvider>
  );
};

export default Layout;
