import React from 'react';
import './App.css';
import Cards from './components/Card';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      image: {},
      name: '',
      followers: '',
      url: '',

    };
  }

  getMembers = () => {
    axios.get(`https://api.github.com/users/Kenya-a`)
    
    .then(response => {
      console.log('App.js Response:', response.data)
      const memberInfo = response.data
      this.setState({
        image: memberInfo.avatar_url,
        name: memberInfo.login,
        followers: memberInfo.followers,
        url: memberInfo.url,
      })

    })

    .catch(error => {
      console.log('Error:', error)
    });
  };

  componentDidMount() {
    this.getMembers();
  }

  render() {
    return (
      <div>
        <h1>Members:</h1>
    
        <Cards
        name = {this.state.name}
        image = {this.state.image}
        followers = {this.state.followers}
        url = {this.state.url}
        />

      
      </div>
    );
  }

};



export default App;
