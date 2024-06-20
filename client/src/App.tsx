import { useState, useEffect } from 'react'
import './App.css'

type TDeck={
  title:string;
  _id:string;
}

function App() {
  //const [count, setCount] = useState(0)
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);


  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    await fetch('http://localhost:5001/decks', {
      method: 'POST',
      body: JSON.stringify({
        title,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    setTitle("");
    fetchDecks();
  }

  async function fetchDecks() {
    const response = await fetch('http://localhost:5001/decks');
    const newDecks = await response.json();
    setDecks(newDecks)
  }

  useEffect(() => {
    fetchDecks();
  }, []);

  return (
    <div className='App'>
      <div className='decks'>
          {decks.map((deck) => (
            <li key={deck._id}>{deck.title}</li>
          ))}
      </div>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title"> Deck Title</label>
        <input id="deck-title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          //TODO:save what they typed
          setTitle(e.target.value);
        }}>

        </input>
        <button>Create Deck</button>
      </form>
    </div>
  )
}

export default App
