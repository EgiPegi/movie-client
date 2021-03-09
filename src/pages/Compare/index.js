import React from 'react'
import { useHistory } from 'react-router'
import { Header } from '../../components'

const Compare = () => {
    let history = useHistory();
    return (
        <div>
        <Header onClick={()=>history.push('/')}/>
        </div>
    )
}

export default Compare
