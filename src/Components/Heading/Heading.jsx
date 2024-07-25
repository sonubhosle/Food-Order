import React from 'react'
import '../../Styles/Heading.css'
const Heading = ({title,subtitle}) => {
    return (
        <div className='heading_section'>
            <div className="box"><div className="line"></div> </div>
            <div className="main_heading">{title}</div>
            <p>{subtitle}</p>
        </div>
    )
}

export default Heading