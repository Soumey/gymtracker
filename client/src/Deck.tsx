import { useState, useEffect } from 'react'
import './Deck.css'
import { useParams } from 'react-router-dom';
import { TDeck } from './api/getDecks';
import { getDeck } from './api/getDeck';
import { createCard } from './api/createCard';
import { deleteCard } from './api/deleteCard';




export default function Deck() {
  //const [count, setCount] = useState(0)
  const [deck, setDeck] = useState<TDeck | undefined>();
  const [text, setText] = useState("");
  const [cards, setCards] = useState<string[]>([]);
  const { deckId } = useParams();

  async function handleCreateCard(e: React.FormEvent) {
    e.preventDefault();
    const { cards: serverCards } = await createCard(deckId!, text);
    setCards(serverCards)
    setText("");
  }

  useEffect(() => {
    async function fetchDeck() {
      if (!deckId) return;
      const newDeck = await getDeck(deckId);
      setDeck(newDeck);
      setCards(newDeck.cards);
    }
    fetchDeck();
  }, [deckId]);

  async function handleDeleteCard(index: number) {
    if (!deckId) return;
    const newDeck= await deleteCard(deckId, index);
    setCards(newDeck.cards);
    //setDecks(decks.filter(deck=>deck._id !== deckId));
  }

  return (
    <div className='Deck'>
      <ul className='cards'>
        {cards.map((card,index) => (
          <li key={index}>
             <button onClick={()=>(handleDeleteCard(index))}>X</button>
            {card}
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateCard}>
        <label htmlFor="card-title"> Card Title</label>
        <input id="card-title" value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          //TODO:save what they typed
          setText(e.target.value);
        }}>

        </input>
        <button>Create Card</button>
      </form>
    </div>
  )
}