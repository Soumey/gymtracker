import { API_URL } from "./config";
import { TDeck } from "./getDecks";

export async function createCard(deckId:string,text:string):Promise<TDeck>{
    const response = await fetch(`${API_URL}/exercises/decks/${deckId}/cards`, {
        method: 'POST',
        body: JSON.stringify({
          text,
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return response.json();
}
