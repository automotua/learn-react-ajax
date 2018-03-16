import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(function(response) {
        return response.json();
      })
      .then(
        (myJson) => {
          this.setState({
            isLoaded: true,
            items: myJson.message["hound"]
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default App;
