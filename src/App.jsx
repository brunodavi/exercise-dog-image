import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      dogs: [],
    };

    this.addDog = this.addDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  async fetchDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const dog = await response.json();
    this.setState(({ dogs }) => ({
      dogs: [...dogs, dog],
    }));
  }

  showDogs() {
    const { dogs } = this.state;
    return dogs.map(({ message }, i) => (
      <img key={ i } src={ message } alt="dog" />
    ));
  }

  addDog() {
    this.fetchDog();
  }

  render() {
    return (
      <div>
        <h1>Dog Image</h1>
        <button type="button" onClick={ this.addDog }>Adicionar Cachorro</button>
        <div>
          <div>{this.showDogs()}</div>
        </div>
      </div>
    );
  }
}

export default App;
