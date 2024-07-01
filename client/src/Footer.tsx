import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export function Footer() {
    return (
        <Container fluid className='text-secondary p-4' style={{ backgroundColor: '#343a40' }}>
            <Row className='justify-content-center mb-3'>
                <Col xs="auto" className='text-center'>
                    Exercises
                </Col>
                <Col xs="auto" className='text-center'>
                    Workout Tracker
                </Col>
                <Col xs="auto" className='text-center'>
                    Profile
                </Col>
                <Col xs="auto" className='text-center'>
                    Login
                </Col>
            </Row>
            <Row className='justify-content-center mb-3'>
                <Col xs="auto" className='text-center'>
                    Social Media icons
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs="auto" className='text-center'>
                    Copyright
                </Col>
            </Row>
        </Container>
    );
}
