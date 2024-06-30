import React, { useState, useEffect } from 'react';
import './App.css';
import { Form, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { deleteDeck } from './api/deleteDeck';
import { TDeck, getDecks } from './api/getDecks';
import { createDeck } from './api/createDeck';
import { Link } from 'react-router-dom';

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    const deck = await createDeck({ title, description, youtubeLink });
    setDecks([...decks, deck]);
    setTitle("");
    setDescription("");
    setYoutubeLink("");
  }

  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await getDecks()
      setDecks(newDecks)
    }
    fetchDecks();
  }, []);

  async function handleDeleteDeck(deckId: string) {
    deleteDeck(deckId);
    setDecks(decks.filter(deck => deck._id !== deckId));
  }

  return (
    <div className='App'>
      <Container>
        <Row>
          {decks.map((deck) => (
            <Col md={4} key={deck._id}>
              <ListGroup.Item>
                <Card style={{ width: '18rem',margin: '10px',backgroundColor: '#808080', color: 'white', padding: '10px'}}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                     <Card.Title className='cardTitle'>
                      <Link to={`decks/${deck._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {deck.title}
                      </Link>
                      </Card.Title>
                    <Card.Text>
                      Small description of exercise.
                    </Card.Text>
                    <Button variant="danger" className='deleteBtn' onClick={() => handleDeleteDeck(deck._id)}>X</Button>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <Form onSubmit={handleCreateDeck}>
          <Form.Group className="mb-3" controlId="deckTitle">
            <Form.Label className='text-white'>Deck Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter deck title"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="deckDescription">
            <Form.Label className='text-white'>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="youtubeLink">
            <Form.Label className='text-white'>YouTube Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter YouTube link"
              value={youtubeLink}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYoutubeLink(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">Create</Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
