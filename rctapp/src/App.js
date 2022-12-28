// import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { About } from './components/About';
import { Admin } from './components/Admin';
import { AuthProvider } from './components/auths';
import { Featured } from './components/Featured';
import { Home } from './components/home';
import { Login } from './components/Login';
import { Mismatch } from './components/Mismatch';
import { Navbar } from './components/navbar';
import { Newproducts } from './components/Newproducts';
import { Orders } from './components/Orders';
import { Products } from './components/products';
import { Profile } from './components/Profile';
import { UserDetails } from './components/UserDetails';
import { Users } from './components/Users';
// const LazyAbout = React.lazy(() => import('./components/About'));


function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<Orders />} />
        <Route path='products' element={<Products />}>
          <Route index element={<Featured />} />
          <Route path='new' element={<Newproducts />} />
          <Route path='featured' element={<Featured />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='profile' element={<Profile />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Mismatch />} />
      </Routes>
    </AuthProvider>

  );
}

export default App;
