import React from 'react'
import { Buttom } from '../../atoms';
import './style.css'

const MovieCard = (props) => {
    const { img, title, desc, genre, watch } = props;
    return (
        <div className='card'>
            <img className="imgThumb" src={img} alt="POST" />
            <p className="title">{title}</p>
            <p className="genre">{genre}</p>
            <div className="text"><section dangerouslySetInnerHTML={{ __html: desc }} /></div>
            <div className='watch-btn'>
                <Buttom title='watch' onClick={watch} />
            </div>
        </div>
    )
}

export default MovieCard
