
import { Button, Card, CardBody, CardTitle, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { UserContext } from '../api/getUserProfile';
import './Tracker.css'
import EditPopup from './EditPopup';
export default function Tracker() {
    const userContext = useContext(UserContext);
    const [open, setOpen] = useState<boolean>(false);

    const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
    const [weight, setWeight] = useState<string>('');
    const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

    const exerciseOptions = ['Squat', 'Bench Press', 'Deadlift']; // Example options
    const unitOptions = ['Kg', 'Lbs'];


    if (!userContext) {
        // Handle the case when userContext is undefined
        return <div>Loading...</div>;
    }
    const { user } = userContext;

    const handleExerciseSelect = (exercise: string) => {
        setSelectedExercise(exercise);
    };

    const handleUnitSelect = (unit: string) => {
        setSelectedUnit(unit);
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log({ selectedExercise, weight, selectedUnit });
        setOpen(false);
    };

    return (
        <Container>
            <Row className='mb-4'>
                <Col>
                    <Card className='mt-2'>
                        <CardBody className='text-center'>
                            <CardTitle>
                                Your Personal Records
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs={12} md={8}>
                    <Card className='mt-2'>
                        <CardBody>
                            <CardTitle>
                                Name of exercise
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={6} md="auto">
                    <Card className='mt-2'>
                        <CardBody>
                            <CardTitle>
                                Weight
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={6} md="auto">
                    <Card className='mt-2'>
                        <CardBody>
                            <CardTitle>
                                Unit
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={6} md="auto">
                    <Card className='mt-2'>
                        <CardBody>
                            <CardTitle>
                                Edit
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={6} md="auto">
                    <Card className='mt-2'>
                        <CardBody>
                            <CardTitle>
                                Delete
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col className='d-flex justify-content-center'>
                    <Button variant="primary" size="sm" className='rounded-circle button-plus' onClick={() => setOpen(true)} >+</Button>
                </Col>
            </Row>
            <EditPopup open={open} onClose={() => setOpen(false)}>
                <Form>
                    <Form.Group>
                    <Dropdown onSelect={(eventKey) => handleExerciseSelect(eventKey as string)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {selectedExercise || 'Pick Exercise'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {exerciseOptions.map((exercise, index) => (
                                    <Dropdown.Item key={index} eventKey={exercise}>
                                        {exercise}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Enter weight"
                            value={weight}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWeight(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                    <Dropdown onSelect={(eventKey) => handleUnitSelect(eventKey as string)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {selectedUnit || 'Pick Unit'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {unitOptions.map((unit, index) => (
                                    <Dropdown.Item key={index} eventKey={unit}>
                                        {unit}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>

                    <Form.Group>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </Form.Group>
                </Form>
            </EditPopup>
        </Container>

    )
}


