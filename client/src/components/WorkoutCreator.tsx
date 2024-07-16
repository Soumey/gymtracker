
import { Button, Card, CardBody, CardTitle, Col, Container, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../api/getUserProfile';
import './Tracker.css'
export default function WorkoutCreator() {
    const userContext = useContext(UserContext);
 

    return (
        <Container>
           {/* fetch workouts of user. */}
            <Row className='mt-4'>
                <Col className='d-flex justify-content-center'>
                    <Button variant="primary" size="sm" className='rounded-circle button-plus'>+</Button>
                    {/* on click go to creator */}
                </Col>
            </Row>
        </Container>
        
    )
}


