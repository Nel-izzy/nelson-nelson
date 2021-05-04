import React, { Component } from 'react'
import "./App.css"
import GameList from './components/GameList'

 class App extends Component {
    state = {
      games : [],
      searched: "",
      filtered: "",
      search : true
    }

    gameFilterOnchange = (event) => {
      this.setState({
       [event.target.name] : event.target.value
   
      })
      
    }

    sortGames = (func) => {
     return  func()
    }
   
    
    componentDidMount() {
      fetch("https://bit.ly/TeaserTask")
           .then(response => response.json())
           .then(games => this.setState({games}))
           .catch( error => console.error(error))
    }

    
    
  render() {
     const filteredGames = () => this.state.games.filter(game => {
       if(game.Group.toLowerCase().includes(this.state.filtered.toLowerCase()) || game.Level.toLowerCase().includes(this.state.filtered.toLowerCase()) ){
        return game
       }
       return []
     })
     const searchedGames = () => this.state.games.filter(game => !game.Topic.toLowerCase().includes(this.state.searched.toLowerCase()))
    
      
     
    return (
      <div>
       <GameList inputValue={this.state.inputValue}
        gameFilterOnchange={this.gameFilterOnchange}
        games = { this.state.filtered.length > 0 ? this.sortGames(filteredGames) : this.sortGames(searchedGames)  }/>
      </div>
    )
  }
}
export default App