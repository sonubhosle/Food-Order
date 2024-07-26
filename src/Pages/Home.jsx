import React from 'react';
import Banner from '../Components/Banner/Banner';
import Categories from '../Components/Categories/Categories';
import Deals from '../Components/Deals/Deals';
import Brands from '../Components/Brands/Brands';
import Popular_Restaurants from '../Components/Popular_Restaurants/Popular_Restaurants';
import Featured_Restaurants from '../Components/Featured_Restaurants/Featured_Restaurants';

const Home = () => {
  return (
    <div className='home_section'>
      <Banner />
      <Categories />
      <Deals />
      <Brands />
      <Popular_Restaurants />
      <Featured_Restaurants />
    </div>
  )
}

export default Home