import React from 'react';
import './App.css';
import Card from './components/Card'
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      members: [],
    };
  }

  getMembers = () => {
    axios.get(`https://api.github.com/users/Kenya-a`)
    
    .then(response => {
      console.log('App.js Response:', response)
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
        <Card/>
      </div>
    );
  }

};



export default App;
