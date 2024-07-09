import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export function Footer() {
    return (
        <Container fluid className='text-secondary p-4 mx-auto' style={{ backgroundColor: '#343a40' }}>
            <Row className='justify-content-center mb-3'>
                <Col xs="auto" className='text-center'>
                    <Link to="/categories" style={{ textDecoration: 'none', color: 'inherit' }}>Categories</Link>
                </Col>
                <Col xs="auto" className='text-center'>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Tracker</Link>
                </Col>
                <Col xs="auto" className='text-center'>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Profile</Link>
                </Col>
                <Col xs="auto" className='text-center'>
                    <Link to="login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
                </Col>
            </Row>
            <Row className='justify-content-center mb-3'>
                <Col xs="auto" className='text-center'>
                    <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/arkadiusz-cieslak'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>
                    <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='https://www.instagram.com/soumey_/'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>
                    <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='https://github.com/Soumey'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs="auto" className='text-center'>
                    Copyright © 2024 Soumey. All rights reserved.
                </Col>
            </Row>
        </Container>
    );
}
