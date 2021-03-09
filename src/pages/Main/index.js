import React, { useEffect, useState } from 'react'
import { Buttom, Header, MovieCard } from '../../components'
import axios from 'axios'
import './style.css'
import { useHistory } from 'react-router'

const Main = () => {
    let history = useHistory();
    const [DataAPI, setDataAPI] = useState([])
    useEffect(() => {
        axios.get('https://movie-serverside.herokuapp.com/v1/movie')
            .then(result => {
                console.log(result.data)
                const resAPI = result.data
                setDataAPI(resAPI)
            })
    }, [])
    return (
        <div className="main">
        <Header />
            <div className="btn-cmp">
                <Buttom title="COMPARE MOVIE" onClick={()=> history.push('/compare')} />
            </div>
            <div className="content">
                {
                    DataAPI.map((m) => {
                        return <MovieCard
                            key={m.id}
                            img={`http://localhost:3000/assets/images/${m.image}`}
                            genre={m.genre}
                            title={m.title}
                            desc={m.synopsis}
                            watch={()=>{
                                window.open(m.link, '_blank');
                            }}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Main
