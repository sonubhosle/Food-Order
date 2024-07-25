import React, { lazy,Suspense } from 'react';
import './App.css';
import Loader from './Components/Loader/Loader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Footer = lazy(() => import( './Components/Footer/Footer'));
const Home  = lazy(() => import('./Pages/Home'));
const Navigation  = lazy(() => import('./Components/Navigation/Navigation'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </Suspense>
  )
}

export default App