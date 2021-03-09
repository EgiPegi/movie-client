import React from 'react'
import './style.css'

const Buttom = ({title, ...rest}) => {
    return (
        <button className='button' {...rest}>{title}</button>
    )
}

export default Buttom
