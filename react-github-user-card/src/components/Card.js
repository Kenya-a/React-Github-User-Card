import React from 'react';

//Card Data

const Card = ({name, followers, url}) => {

    console.log('Card.js Props:', name, followers, url)

    return (
        <div>User Card Here
            <h2>{name}</h2>
            <p>{followers}</p>
            <p>{url}</p>

        </div>
        
    )
}


export default Card;