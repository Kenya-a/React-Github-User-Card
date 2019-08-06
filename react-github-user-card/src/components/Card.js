import React from 'react';
// import Followers from './Followers';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Cards = ({ name, followers, url, image }) => {

    console.log('Card.js Props:', name, followers, url, image)

    return (

        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>Lambda School</Card.Meta>
                <Card.Description>{url}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Link to={'#'}>
                    <Icon name='user' />
                    {followers} Friends
                </Link>
            </Card.Content>
        </Card>

    )
}


export default Cards;

// import React from 'react'
// import { Card, Icon, Image } from 'semantic-ui-react'

// const CardExampleCard = () => (
//   <Card>
//     <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>Matthew</Card.Header>
//       <Card.Meta>
//         <span className='date'>Joined in 2015</span>
//       </Card.Meta>
//       <Card.Description>
//         Matthew is a musician living in Nashville.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         22 Friends
//       </a>
//     </Card.Content>
//   </Card>
// )

// export default CardExampleCard