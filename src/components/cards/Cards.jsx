import React from 'react'
import './cards.css'

const Cards = ({ monster }) => {
    return(
        <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
        <h2>{monster.name}</h2>
        <h3>{monster.email}</h3>
        </div>
    )
}

export default Cards;