import React from 'react'
import './location.component.css';

function Location({location}) {
    return (
        <div className='location'>
            <p>{location.street.number}</p>
            <p>{location.street.name}</p>
            <p>{location.city}</p>
            <p>{location.state}</p>
            <p>{location.country}</p>
        </div>
    )
}

export default Location
