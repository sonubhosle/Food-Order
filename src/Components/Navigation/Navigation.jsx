import React from 'react'
import '../../Styles/Navigation.css'
import { Link } from 'react-router-dom'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
const Navigation = () => {
    return (
        <div className='navigation'>
            <Link to='/' className='logo_name'>Zomo <p></p> </Link>
            <div className="left_nav">
                <div className="search">
                    <input type="text" className="search_bar" placeholder='Search Delicious Food ' />
                    <FiSearch className='search_icon' />
                </div>
                <div className="menu_list">
                    <Link to='/cart'><FiShoppingCart /></Link>
                    <div className="line"></div>
                    <div className="profile">
                        <div className="image"></div>
                        <div className="details">
                            <div className="name">Hi, Mark Jecno</div>
                            <p>My Account</p>
                        </div>

                        <div className="account_box">
                            <div className='menu_name'>Profile</div>
                            <div className='menu_name'>My Orders</div>
                            <div className='menu_name'>Settings</div>
                            <div className="hr"></div>
                            <div className='menu_name orange'>Logout</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation