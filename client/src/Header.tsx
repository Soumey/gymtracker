import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { MDBIcon } from 'mdb-react-ui-kit';

export function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary bg-transparent" data-bs-theme="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">Gym Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"><MDBIcon fas icon="bars" /> </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                        <Nav.Link as={Link} to="/tracker">Tracker</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
