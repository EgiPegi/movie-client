import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Buttom, Header } from '../../components'
import './style.css'

const Compare = () => {
    const [Movie1, setMovie1] = useState([])
    const [Movie2, setMovie2] = useState([])
    const [Choose, setChoose] = useState([])
    const [Choose1, setChoose1] = useState([])
    const [Choose2, setChoose2] = useState([])
    const [IsCompare, setIsCompare] = useState(false)
    const compare = () => {
        axios.get(`http://localhost:3001/v1/compare?movie1=${Choose1}&movie2=${Choose2}`)
            .then(result => {
                console.log()
                setMovie1(result.data.movie1)
                setMovie2(result.data.movie2)
                setIsCompare(true)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        axios.get('http://localhost:3001/v1/movie')
            .then(result => {
                console.log()
                setChoose(result.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    let history = useHistory();
    return (
        <div className='compare'>
            <Header onClick={() => history.push('/')} />
            <div className='content'>
                <div className='choose'>
                    <select className='slct-choose' onClick={(e) => { setChoose1(e.target.value) }}>
                        <option value=''></option>
                        {
                            Choose.map((c) => {
                                return <option value={c.id} key={c.id}>{c.title}</option>
                            })
                        }
                    </select>
            Compare to
            <select className='slct-choose' onClick={(e) => { setChoose2(e.target.value) }}>
                        <option value=''></option>
                        {
                            Choose.map((c) => {
                                return <option value={c.id} key={c.id}>{c.title}</option>
                            })
                        }
                    </select>
                    <Buttom title='compare' onClick={()=> compare()} />
                </div>
                {
                    IsCompare ? (
<table>
                    <tr>
                        <th></th>
                        <th>{Movie1.title}</th>
                        <th>{Movie2.title}</th>
                    </tr>
                    <tr>
                        <th></th>
                        <td style={{ textAlign: "center" }}><img className="imgCompare" src={`http://localhost:3000/assets/images/${Movie1.image}`} alt="POST" /></td>
                        <td style={{ textAlign: "center" }}><img className="imgCompare" src={`http://localhost:3000/assets/images/${Movie2.image}`} alt="POST" /></td>
                    </tr>
                    <tr>
                        <th>Year</th>
                        <td>{Movie1.year}</td>
                        <td>{Movie2.year}</td>
                    </tr>
                    <tr>
                        <th>Rating</th>
                        <td>{Movie1.rate}</td>
                        <td>{Movie2.rate}</td>
                    </tr>
                    <tr>
                        <th>Genre</th>
                        <td>{Movie1.genre}</td>
                        <td>{Movie2.genre}</td>
                    </tr>
                    <tr>
                        <th>Director</th>
                        <td>{Movie1.Director}</td>
                        <td>{Movie2.Director}</td>
                    </tr>
                    <tr>
                        <th>Stars</th>
                        <td>{Movie1.stars}</td>
                        <td>{Movie2.stars}</td>
                    </tr>
                    <tr>
                        <th>Synopsis</th>
                        <td>{Movie1.synopsis}</td>
                        <td>{Movie2.synopsis}</td>
                    </tr>
                    <tr>
                        <th>Watch</th>
                        <td><Buttom title='watch' onClick={() => window.open(Movie1.link, '_blank')} /></td>
                        <td><Buttom title='watch' onClick={() => window.open(Movie2.link, '_blank')} /></td>
                    </tr>
                </table>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Compare
