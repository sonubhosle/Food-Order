import React, { lazy,Suspense } from 'react';
import './App.css';
import Loader from './Components/Loader/Loader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Product_Details  = lazy(() => import('./Pages/Product_Details'));
const Navigation  = lazy(() => import('./Components/Navigation/Navigation'));
const Home  = lazy(() => import('./Pages/Home'));
const Category_Related = lazy(() => import( './Pages/Category_Related'));
const Footer = lazy(() => import( './Components/Footer/Footer'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route  path='/food/:name/:id'  element={<Category_Related />}/>
        <Route  path='/products/:name/:id'  element={<Product_Details />}/>

      </Routes>
      <Footer />
      </BrowserRouter>
    </Suspense>
  )
}

export default App