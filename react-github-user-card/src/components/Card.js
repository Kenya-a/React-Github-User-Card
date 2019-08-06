import React from 'react';
import Followers from './Followers'

//Card Data

const Card = ({name, followers, url}) => {

    console.log('Card.js Props:', name, followers, url)

    return (
        <div>User Card Here
            <h2>{name}</h2>
            <p>{followers}</p>
            <p>{url}</p>
            <Followers/>

        </div>
        
    )
}


export default Card;