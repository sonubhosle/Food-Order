import React from 'react'
import '../../Styles/Navigation.css'
import { Link } from 'react-router-dom'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import { FaRegUser,FaRegAddressBook  } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";

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
                <div className="line"></div>
                    <Link to='/cart'><FiShoppingCart /></Link>
                    <div className="profile">
                        <div className="image">
                            <img src="https://angular.pixelstrap.net/zomo/assets/images/icons/p5.png" alt="" />
                        </div>
                        <div className="details">
                            <div className="name">Hi, Mark Jecno</div>
                            <p>My Account</p>
                        </div>

                        <div className="account_box">
                            <div className='menu_name'><FaRegUser/> Profile</div>
                            <div className='menu_name'><LuClipboardList/> My Orders</div>
                            <div className='menu_name'><FaRegAddressBook /> Saved Address</div>
                            <div className='menu_name'><FiShoppingCart /> My Carts</div>
                            <div className='menu_name'><IoSettingsOutline /> Settings</div>
                            <div className="hr"></div>
                            <div className='menu_name orange'><RiLogoutBoxRLine/> Logout</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation