import React from 'react'
import '../../Styles/Brands.css'
import Headings from '../Heading/Heading'
const brands=[
    {
        "id":1,
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/icons/brand8.png",
        "name":"Domino's"
    },
    {
        "id":2,
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/icons/brand9.png",
        "name":"Toco Bell"
    },
    {
        "id":3,
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/icons/brand10.png",
        "name":"Chipotle"
    },
    {
        "id":4,
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/icons/brand11.png",
        "name":"KFC"
    },
    {
        "id":5,
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/icons/brand1.png",
        "name":"Lapino'z"
    },
    {
        "id":6,
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/icons/brand2.png",
        "name":"Mc'd"
    },
    {
        "id":7,
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/icons/brand3.png",
        "name":"Starbucks"
    },
    {
        "id":8,
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/icons/brand4.png",
        "name":"Pizza Hut"
    },
    {
        "id":9,
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/icons/brand5.png",
        "name":"Wendy's"
    },
    {
        "id":10,
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/icons/brand6.png",
        "name":"Burger King"
    },
    {
        "id":10,
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/icons/brand7.png",
        "name":"Subway"
    },
]

const Brands = () => {
  return (
    <div className='brands_section'>
        <Headings title={"Brand For You"} subtitle={"Browse out top brands here to discover different food cuision"} />
        <div className="brands_grid">
            {
                brands.map((item,index)=>{
                    return(
                        <div className="brand_card" key={index}>
                            <img src={item.poster} alt={item.name} />
                            <div className="name">{item.name}</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Brands