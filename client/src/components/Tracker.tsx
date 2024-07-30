import { Button, Card, CardBody, CardTitle, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { TPersonalRecords, UserContext } from '../api/getUserProfile';
import './Tracker.css'
import EditPopup from './EditPopup';
import { getUserPR } from '../api/getUserPR';
import { deleteUserPR } from '../api/deleteUserPR';
import { createUserPR } from '../api/createUserPR';

export default function Tracker() {
    // const userContext = useContext(UserContext);
    const [open, setOpen] = useState<boolean>(false);
    const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
    const [weight, setWeight] = useState<string>('');
    const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
    const [personalRecords, setPersonalRecord] = useState<TPersonalRecords[]>([]);
    const exerciseOptions = ['Squat', 'Bench Press', 'Deadlift']; // Example options
    const unitOptions = ['Kg', 'Lbs'];
    const token = localStorage.getItem('token');

    useEffect(() => {
        async function fetchExercises() {
            if (token) {
                try {
                    const fetchedPRs = await getUserPR(token);
                    if (Array.isArray(fetchedPRs)) {
                        setPersonalRecord(fetchedPRs);
                    } else {
                        console.error("Fetched exercises is not an array", fetchedPRs);
                        setPersonalRecord([]);
                    }
                } catch (error) {
                    console.error("Error fetching exercises:", error);
                    setPersonalRecord([]);
                }
            }
        }
        fetchExercises();
    }, [token]);

    async function handleDeletePR(personalRecordId: string) {
        if (token) {
            try {
                await deleteUserPR(token, personalRecordId);
                setPersonalRecord(personalRecords.filter(pr => pr._id !== personalRecordId));
            } catch (error) {
                console.error("Error deleting personal record:", error);
            }
        }
    };

    const handleExerciseSelect = (exercise: string) => {
        setSelectedExercise(exercise);
    };

    const handleUnitSelect = (unit: string) => {
        setSelectedUnit(unit);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedExercise || !weight || !selectedUnit) {
            alert('Please fill in all fields');
            return;
        }
        try {
            const newPR = await createUserPR(token!, selectedExercise, selectedUnit, parseFloat(weight));
            setPersonalRecord([...personalRecords, newPR]);
            setWeight('');
            setSelectedUnit(null);
            setSelectedExercise(null);
            setOpen(false);
        } catch (error) {
            console.error("Error creating personal record:", error);
        }
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
            {personalRecords.map((personalRecord) => (
                <Row className='d-flex justify-content-center' key={personalRecord._id}>
                    <Col xs={12} md={8}>
                        <Card className='mt-2'>
                            <CardBody>
                                <CardTitle>
                                    {personalRecord.name}
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={6} md="auto">
                        <Card className='mt-2'>
                            <CardBody style={{minWidth:"70px"}}>
                                <CardTitle>
                                    {personalRecord.weight}
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={6} md="auto">
                        <Card className='mt-2'>
                            <CardBody>
                                <CardTitle>
                                    {personalRecord.unit}
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
                    <Col xs={6} md="auto" className="d-flex align-items-center justify-content-center">
                        <Button variant="danger" onClick={() => handleDeletePR(personalRecord._id)}>Delete</Button>
                    </Col>
                </Row>
            ))}
            <Row className='mt-4'>
                <Col className='d-flex justify-content-center m-5'>
                    <Button variant="primary" size="sm" className='rounded-circle button-plus' onClick={() => setOpen(true)}>+</Button>
                </Col>
            </Row>
            <EditPopup open={open} onClose={() => setOpen(false)}>
                <Form onSubmit={handleSubmit}>
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
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </EditPopup>
        </Container>
    );
}
