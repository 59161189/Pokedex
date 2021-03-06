import './App.css';
import React from 'react'
import Nav from './components/nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Types from './pages/types'
import Stats from './pages/stats'
import Pokemon from './pages/pokemons'

class App extends React.Component{
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/Pokedex" exact component={Pokemon} />
            <Route path="/Pokedex/type" component={Types} />
            <Route path="/Pokedex/stats" component={Stats} />
          </Switch>
        </div>
      </Router>

    );
  }

}

export default App;
