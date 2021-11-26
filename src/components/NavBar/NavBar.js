import {  NavDropdown, Container, Nav, Navbar  } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div>
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">FDSecurity</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Staff</Nav.Link>
                  <NavDropdown title="Services" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Asesoria Integral</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Seguridad de la Informacion</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="Action3">About US</Nav.Link>
                </Nav>
                <CartWidget/>
                {/* 
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button> .# </Button>
                  
                </Form> */}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
)}
export default NavBar