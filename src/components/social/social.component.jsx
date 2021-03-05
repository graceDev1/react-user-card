import React from 'react';
import Location from '../location/location.component';
import Phone from '../phone/phone.component';
import './social.component.css';

function SocialCard({user}) {
    return (
        <div className="card">
            <div className="card__title">{user.name.first} {user.name.last}</div>
            <div className="card__body">
                <Location location={user.location}/>
                <Phone number={user.phone} type='Phone'/>
                <Phone number={user.cell} type='Cell'/>
                <div className="card__image"><img src={user.picture.medium} alt="..."/></div>
            </div>  
        </div>
    )
}

export default SocialCard
