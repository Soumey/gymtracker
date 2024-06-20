import { useState, useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import { deleteDeck } from './api/deleteDeck';
import { TDeck, getDecks } from './api/getDecks';
import { createDeck } from './api/createDeck';



function App() {
  //const [count, setCount] = useState(0)
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    const deck= await createDeck({ title });
    setDecks([...decks,deck])
    setTitle("");
  }

  useEffect(() => {
    async function fetchDecks(){
      const newDecks = await getDecks()
      setDecks(newDecks)
    }
    fetchDecks();
  }, []);

  async function handleDeleteDeck(deckId: string) {
    deleteDeck(deckId);
    setDecks(decks.filter(deck=>deck._id !== deckId));
  }

  return (
    <div className='App'>
      <div className='decks'>
        {decks.map((deck) => (
          <li key={deck._id}>
            <button onClick={()=>(handleDeleteDeck(deck._id))}>X</button>
            <Link to={`decks/${deck._id}`}>{deck.title}</Link>
            </li>
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
