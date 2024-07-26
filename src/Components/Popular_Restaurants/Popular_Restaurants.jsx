import React from 'react'
import '../../Styles/Popular_Restaurants.css'
import Crad from '../Crads/Crad'
import Headings from '../Heading/Heading'

const Popular_Restaurants = () => {
    return (
        <div className='restaurants_section bg-light'>
            <Headings title={"Popular Restaurants"} subtitle={"Find nearby popular Restaurants."} />
            <div className="restaurants_grid">
                {
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <Crad products={item} key={index} />)
                }
            </div>
        </div>
    )
}

export default Popular_Restaurants