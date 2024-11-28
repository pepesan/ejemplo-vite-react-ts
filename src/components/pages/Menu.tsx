// Ref : https://github.com/react-bootstrap/react-router-bootstrap
// Uso esto de base porque quiero que los enlaces de Link vayan dentro de un NAvBar de React Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Menu.css"
import LinkContainer from "./LinkContainer.tsx";
const Menu = () => {
    return (
        <div>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Inicio</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Navegacion" id="basic-nav-dropdown">
                                <LinkContainer to="/navega">
                                    <NavDropdown.Item>Navega</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/listado">
                                    <NavDropdown.Item>
                                        Listado
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to="/ciclodevida">
                                <Nav.Link >Ciclo de Vida</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu;