import { useState } from 'react'
import './App.css'

// Example monster data
const monsterCards = [
  { id: 1, name: 'Dragon', attack: 7, defense: 5, hp: 10, image: '/dragon.png' },
  { id: 2, name: 'Goblin', attack: 3, defense: 2, hp: 5, image: '/goblin.png' },
  { id: 3, name: 'Troll', attack: 5, defense: 4, hp: 8, image: '/troll.png' },
  // Add more monsters...
]

function App() {
  const [deck, setDeck] = useState(monsterCards)
  const [battlefield, setBattlefield] = useState([])

  return (
    <div className="game-board">
      <div className="battlefield">
        <h2>Battlefield</h2>
        {/* This will be our drop zone */}
      </div>
      
      <div className="deck">
        <h2>Your Deck</h2>
        {deck.map(monster => (
          <div key={monster.id} className="card">
            <h3>{monster.name}</h3>
            <div className="stats">
              <p>ATK: {monster.attack}</p>
              <p>DEF: {monster.defense}</p>
              <p>HP: {monster.hp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App