import React from 'react'
import {FaStar} from 'react-icons/fa'
import { IoLocation } from "react-icons/io5";
import { IoTime } from "react-icons/io5";

const Crad = ({products}) => {
  return (
    <div className='card'>
        <div className="image">
            <img src="https://angular.pixelstrap.net/zomo/assets/images/product/vp-1.png" alt="" />
            <div className="overlay">
                <p>50% OFF</p>
            </div>
        </div>
        <div className="info">
            <div className='title_rating'>
                <div className="name">Poultry Palace</div>
                <div className="rating"><p><FaStar /></p>  3.9</div>
            </div>
            <div className="tags">Chicken quesadilla, avocado....</div>
            <div className="border_dotted"></div>
            <div className="bottom_sect">
                <div className="location">New Jsercy</div>
               <div className="other">
               <div className="distance"> <p><IoLocation/></p> 3.2 km</div>
                <div className="time"><p><IoTime /></p> 25 min</div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Crad