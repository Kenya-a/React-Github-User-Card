import React from 'react';
import Followers from './Followers';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Cards = ({ name, followers, url, image }) => {

    console.log('Card.js Props:', name, followers, url, image)

    return (
    
     <>
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

        <Followers/>
     </>

    )
}


export default Cards;

