import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu(){
    return (    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/teams" className='nav-link'>Teams</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
}

export default Menu;