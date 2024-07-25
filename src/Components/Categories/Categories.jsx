import React from 'react'
import '../../Styles/Categories.css'
import Heading from '../Heading/Heading'

const categories = [
    {
      "id":1,
      "name":"Fries",
      "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-5.png"
    },
    {
        "id":2,
        "name":"Boritto",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-6.png"
      },
      {
        "id":3,
        "name":"Taco",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-7.png"
      },
      {
        "id":4,
        "name":"Muffin",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-8.png"
      },
      {
        "id":5,
        "name":"Meat",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-9.png"
      },
      {
        "id":6,
        "name":"Panner",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-10.png"
      },
      {
        "id":7,
        "name":"Hotdog",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-11.png"
      },
      {
        "id":8,
        "name":"Donuts",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-12.png"
      },
      {
        "id":9,
        "name":"Coffe",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-13.png"
      },
      {
        "id":10,
        "name":"Sandwich",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-14.png"
      },
      {
        "id":11,
        "name":"Noddle",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-15.png"
      },
      {
        "id":12,
        "name":"Pasta",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-16.png"
      },
      {
        "id":13,
        "name":"Meggi",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-17.png"
      },
      {
        "id":14,
        "name":"Momos",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-18.png"
      },
      {
        "id":15,
        "name":"Salad",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-19.png"
      },

      {
        "id":16,
        "name":"Biryani",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-20.png"
      },
      {
        "id":18,
        "name":"Pizza",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-1.png"
      },
      {
        "id":19,
        "name":"Chicken",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-2.png"
      },
      {
        "id":20,
        "name":"Burger",
        "poster":"https://angular.pixelstrap.net/zomo/assets/images/product/p-3.png"
      },
]

const Categories = () => {
    return (
        <div className='categories'>
            <Heading title={"Categories"} subtitle={"Browse out top categories here to discover different food cuision."}/>
            <div className="category_grid">
                {
                    categories.map((item, index) => {
                        return (
                            <div className="cat_box" key={index}>
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

export default Categories