import React from 'react'
import '../../Styles/Banner.css'

const Banner = () => {
  return (
    <div className='banner_section'>
      <div className="over_text">
        <div className="sm_text">50% off on your first order</div>
        <div className="big_text">Unforgettable meals. Delivered.</div>
        <button className='shop_now'>Shop Now</button>
      </div>
      <div className="poster">
        <img src="https://i.postimg.cc/GhqHJ0GP/illustrated-delivery-man-with-scooter-962508-41197-removebg-preview.png" alt="" />
      </div>
    </div>
  )
}

export default Banner