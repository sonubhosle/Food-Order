import React from 'react'
import '../../Styles/Deals.css'
import Heading from '../Heading/Heading'
const deals = [
    {
        "id": 1,
        "poster": "https://angular.pixelstrap.net/zomo/assets/images/banner/banner1.jpg"
    },

    {
        "id": 2,
        "poster": "https://angular.pixelstrap.net/zomo/assets/images/banner/banner2.jpg"
    },
    {
        "id": 3,
        "poster": "https://angular.pixelstrap.net/zomo/assets/images/banner/banner3.jpg"
    },
    {
        "id": 4,
        "poster": "https://angular.pixelstrap.net/zomo/assets/images/banner/banner4.jpg"
    },
    {
        "id": 5,
        "poster": "https://angular.pixelstrap.net/zomo/assets/images/banner/banner5.jpg"
    },

]
const Deals = () => {
  return (
    <div className='deals_section'>
        <Heading title={"Today’s Deal"} subtitle={"Take a benefit from our latest offers."} />
        <div className="deals_grid">
            {
                deals.map((item,index)=>{
                    return(
                        <div className="deals_card" key={index}>
                            <img src={item.poster} alt="" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Deals