import React from 'react'
import Game from "./Game"

const GameList = (props) => {
   
    
    return (
        <div>
            <h1 className="heading">9ja Kids Game List</h1>
            <div className="divider">
            <div>
            <label htmlFor="search">Search by Topic</label> 
            <input type="text" 
            onChange = {props.gameFilterOnchange} 
            name="searched" 
            value={props.inputValue}
            placeholder ="Search by Topic" />
            </div>
            <div>
            <label htmlFor="search">Filter Games</label> 
            <input type="text" 
            onChange = {props.gameFilterOnchange} 
            name="filtered" 
            value={props.inputValue} 
            placeholder ="Filter by Group or Level"/>
            </div>
           
            </div>
            <div className="Game"> 
            {props.games.map(game => {
                return <Game title = {game.GameTitle}
                             description = {game.GameDescription}
                             image = {game.GameImage}/>
            })}
            </div>
        </div>
    )
}




export default GameList
