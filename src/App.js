import React, { Component } from 'react';
<<<<<<< HEAD

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

=======
import { CardList } from './components/card-list/card-list.component';
>>>>>>> 3d7d8c24381afc8c8e9358aee4985c910c62278a
import './App.css';

class App extends Component {

  constructor() {
    super();
<<<<<<< HEAD
=======

>>>>>>> 3d7d8c24381afc8c8e9358aee4985c910c62278a
    this.state = {
      monsters: [],
      searchField: '',
    };
<<<<<<< HEAD
    
  }

  // Lexical scoping, the arrow function allows us to target the component from which context it came from
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters : users}))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox placeholder='search monsters' handleChange={ this.handleChange }  />
        <CardList monsters={filteredMonsters} />
    </div>
    );
  } 
}

=======
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }



  render() {
    const { monsters, searchField } = this.state;
    const  filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <input type="search" placeholder="search monsters" onInput={e => this.setState({searchField: e.target.value})}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


>>>>>>> 3d7d8c24381afc8c8e9358aee4985c910c62278a
export default App;
