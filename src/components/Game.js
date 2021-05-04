import React from 'react'

function Game({title, description, image}) {
    return (
        
        <div >
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image} alt={title}/>
        </div>
        
    )
}

export default Game
