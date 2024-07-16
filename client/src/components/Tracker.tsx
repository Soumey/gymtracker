
import { Button, Card, CardBody, CardTitle, Col, Container, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../api/getUserProfile';
import './Tracker.css'
export default function Tracker() {
    const userContext = useContext(UserContext);
 

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
                    <Button variant="primary" size="sm" className='rounded-circle button-plus'>+</Button>
                </Col>
            </Row>
        </Container>
        
    )
}


