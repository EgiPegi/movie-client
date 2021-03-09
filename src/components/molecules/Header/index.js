import React from 'react'
import './style.css'

const Header = ({...rest}) => {
    return (
        <div className='header' {...rest}>
            <h3>Top-Rated Movie Of the Year</h3>
        </div>
    )
}

export default Header
