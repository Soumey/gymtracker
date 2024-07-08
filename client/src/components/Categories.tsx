import React, { useState, useEffect } from 'react';
import '../App.css';
import { Form, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PeakMale from './assets/PeakMale.png';
import { createCategory } from '../api/createCategory';
import { getCategories, TCategory } from '../api/getCategories';
import { deleteCategory } from '../api/deleteCategory';

export default function Exercises() {
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    //   const [description, setDescription] = useState("");
    //   const [youtubeLink, setYoutubeLink] = useState("");
    const [categories, setCategories] = useState<TCategory[]>([]);
    const [imgSrc,setImgSrc]=useState("")

    //   async function handleCreateDeck(e: React.FormEvent) {
    //     e.preventDefault();
    //     const deck = await createDeck({ title, description, youtubeLink });
    //     setDecks([...decks, deck]);
    //     setTitle("");
    //     setDescription("");
    //     setYoutubeLink("");
    //   }

    async function handleCreateCategory(e: React.FormEvent) {
        e.preventDefault();
        const category = await createCategory({ title, img });
        setTitle("");
        setImg("");
    }

    //     async function
    //   useEffect(() => {
    //     async function fetchDecks() {
    //       const newDecks = await getDecks()
    //       setDecks(newDecks)
    //     }
    //     fetchDecks();
    //   }, []);

    useEffect(() => {
        async function fetchCategories() {
            const newCategories = await getCategories();
            setCategories(newCategories);
        }
        fetchCategories()
    },
        []);

    //   async function handleDeleteDeck(deckId: string) {
    //     deleteDeck(deckId);
    //     setDecks(decks.filter(deck => deck._id !== deckId));
    //   }

    async function handleDeleteCategory(categoryId: string) {
        deleteCategory(categoryId);
        setCategories(categories.filter(category => category._id !== categoryId));
    }

    return (
        <div className='App'>
            <Container>
                <Row>
                    {categories.map((category) => (
                    <Col xs={12} sm={6} md={4} key={category._id}>
                    {/* <Col xs={12} sm={6} md={4}> */}
                        <ListGroup.Item>
                            <Card style={{ margin: '10px', backgroundColor: '#808080', color: 'white', padding: '10px' }}>
                                <Card.Img variant="top" src={imgSrc} />
                                <Card.Body>
                                    <Card.Title className='cardTitle'>
                                        {/* <Link to={`decks/${deck._id}`} style={{ textDecoration: 'none', color: 'inherit' }}> */}
                                        {category.title}
                                        {/* </Link> */}
                                    </Card.Title>
                                    <Card.Text>
                                        {/* {deck.description} */}
                                    </Card.Text>
                                    <Button variant="danger" className='deleteBtn' onClick={() => handleDeleteCategory(category._id)}>X</Button>
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                    </Col>
                    ))}
                </Row>
            </Container>
            {/* //--------------------------- */}
            <Container>
                <Form> {/* <Form onSubmit={handleCreateDeck}> */}
                    <Form.Group className="mb-3" controlId="deckTitle">
                        <Form.Label className='text-white'>Deck Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter deck title"
                        //value={title}
                        //onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="deckDescription">
                        <Form.Label className='text-white'>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter description"
                        //value={description}
                        //onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="youtubeLink">
                        <Form.Label className='text-white'>YouTube Link</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter YouTube link"
                        //value={youtubeLink}
                        //onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYoutubeLink(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='mb-5'>Create</Button>
                </Form>
            </Container>
        </div>
    );
}


