import React from 'react';
import axios from 'axios';
import FollowersCards from './FollowerCards'

class Followers extends React.Component {
    constructor() {
        super();

        this.state = {
            followers: [],
        }

    };

    getFollowers = () => {
        axios.get(`https://api.github.com/users/Kenya-a/followers`)
    
        .then(response => {
            console.log('Followers.js Response:', response.data)
            this.setState({
                followers: response.data,

            })
        })
    
        .catch(error => {
            console.log('F.Error: ', error)
        });
        
    };

    componentDidMount() {
        this.getFollowers();
    }

    render(key) {
        console.log('Console in Render',this.state.followers)
        return(
            <div>
            {/* {this.state.followers.map(e => key=(e.login))} */}
            {this.state.followers.map(e => <FollowersCards
                name = {e.login}
                image = {e.avatar_url}
                url = {e.html_url}
                followers = {e.followers_url}
            />)}

            </div>

        )
    }
}



export default Followers