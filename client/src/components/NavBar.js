import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand>
          <h1 className='logo'>Fire Foods</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <div className="links">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/link-one'>Link One</NavLink>
            <NavLink to='/link-two'>Link Two</NavLink>
          </div>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search.."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;