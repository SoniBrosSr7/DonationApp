import { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Donor App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to={'/'}>
                                <Nav.Link>DonorHome</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/donor-registration-from'}>
                                <Nav.Link>Register Donor</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/donor-login'}>
                                <Nav.Link>Login Donor</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/donor-profile'}>
                                <Nav.Link>View Donor Profile</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}