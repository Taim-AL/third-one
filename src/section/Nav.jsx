import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AOS from 'aos';

function NavScrollExample() {
  AOS.init();
  return (
    <>
    <Navbar className='navbar' variant='dark' expand="lg" fixed='top' data-aos="fade-down">
      <Container >
        <Navbar.Brand href="#"><h3 className='h3-nav'>ARSHA</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{flexGrow:"0"}}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="#action4">Portfolio</Nav.Link>
            <Nav.Link href="#action5">Taem</Nav.Link>
            <NavDropdown title="Drop Down" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action7">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action8">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action9">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form style={{paddingLeft:"2rem"}}>
            <button className='get-nav'>Get Started </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default NavScrollExample;