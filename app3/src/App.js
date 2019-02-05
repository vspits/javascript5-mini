import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      badMovies: ['Battlefield Earth', 'Cat Woman', 'Avatar: The Last Airbender']
    }
  }

  render() {

    const mappedBadMovies = this.state.badMovies.map((movie, i) => {
      return (
        <Movie key={i} movie={movie} />
      )
    })

    return (
      <div className="App">
        <h1>Terrible Movies List:</h1>
        {mappedBadMovies}
      </div>
    );
  }
}

export default App;
