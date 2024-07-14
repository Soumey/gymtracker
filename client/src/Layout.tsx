import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

import { Toaster } from 'react-hot-toast';
import {UserContextProvider} from '../context/userContext'
const Layout: React.FC = () => {
  return (
    <UserContextProvider>
      <Header />
      <Toaster position='bottom-center' toastOptions={{duration:2000}}/>
      <Outlet/>
      <Footer />
    </UserContextProvider>
  );
};

export default Layout;
