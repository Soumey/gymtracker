import { useState, useEffect, useContext } from 'react'
import { Button, Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { TExercise } from '../api/getCategories';
import { getExercises } from '../api/getExercises';
import './card.css'
import { createExercise } from '../api/createExercise';
import { deleteExercise } from '../api/deleteExercise';
import { UserContext } from '../api/getUserProfile';




export default function Exercise() {
  const userContext = useContext(UserContext);
  const { categoryId } = useParams<{ categoryId: string }>();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [exercises, setExercises] = useState<TExercise[]>([]);

  useEffect(() => {
    async function fetchExercises() {
      if (categoryId) {
        try {
          const fetchedExercises = await getExercises(categoryId);
          if (Array.isArray(fetchedExercises)) {
            setExercises(fetchedExercises);
          } else {
            console.error("Fetched exercises is not an array", fetchedExercises);
            setExercises([]);
          }
        } catch (error) {
          console.error("Error fetching exercises:", error);
          setExercises([]);
        }
      }
    }
    fetchExercises();
  }, [categoryId]);

  async function handleCreateExercise(e: React.FormEvent) {
    e.preventDefault();
    if (!categoryId) {
      console.error('Category ID is not defined');
      return;
    }
    const exercise = await createExercise(categoryId, name, description, link);
    setExercises([...exercises, exercise]);
    setName("");
    setDescription("");
    setLink("");
  }

  async function handleDeleteExercise(categoryId: string, exerciseId:string) {
    deleteExercise(categoryId,exerciseId);
    setExercises(exercises.filter(exercise => exercise._id !== exerciseId));
  }

  return (
    <Container fluid style={{ backgroundColor: 'rgb(43, 43, 44)', padding: '20px' }}>
      
        <Row>
          {exercises.map((exercise) => (
            <Col xs={12} sm={6} md={4} key={exercise._id} className="d-flex">
              <ListGroup.Item className="w-100">
                <Card className="category-card">
                  <Card.Body>
                    <Card.Title className='categoryTitle'>{exercise.name}</Card.Title>
                    <Card.Text>{exercise.description}</Card.Text>
                    <Card.Link href={exercise.link.startsWith('http') ? exercise.link : `http://${exercise.link}`}>Video Example</Card.Link>
                    <Button variant="danger" className='deleteBtn' onClick={() => handleDeleteExercise(categoryId!,exercise._id)}>X</Button>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            </Col>
          ))}
        </Row>
      


      {userContext?.user && (
                            <>
      
        <Form className='mt-5' onSubmit={handleCreateExercise} >
          <Form.Group className="mb-3" controlId="exerciseName">
            <Form.Label className='text-white'>Exercise name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exerciseDesc">
            <Form.Label className='text-white'>Exercise description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exerciseLink">
            <Form.Label className='text-white'>Video example link</Form.Label>
            <Form.Control
              type="text"
              value={link}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLink(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className='mb-5'>Create</Button>
        </Form>
      
      </>
      )}
      </Container>
  )

}
