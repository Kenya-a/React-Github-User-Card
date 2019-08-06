import React from 'react';
import axios from 'axios';

//Followers Data

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

    render() {
        return(
            <div>
            <h1>Hello from followers.js</h1>
            {/* {this.state.followers.map(element =>{return key={element}})} */}
            </div>

        )
    }
}



export default Followers