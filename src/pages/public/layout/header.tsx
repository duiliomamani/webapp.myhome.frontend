import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import ButtonLogin from '../../shared/login/login';

/* Files */
import logo from '../../../assets/images/logo-principal.png';

const Header = () => {
    return <header>
        <Navbar bg="white" expand="lg" className="d-flex flex-wrap border-bottom">
            <Container fluid >
                <Nav className="justify-content-md-start justify-content-center">
                    <Nav.Item>
                        <small>
                            <Nav.Link href="mailto:info@myhome.com" className="d-inline-block">
                                <FontAwesomeIcon icon={["fas", "envelope"]} /> Contacto: info@myhome.com</Nav.Link>
                        </small>
                    </Nav.Item>
                </Nav>
                <Nav className="justify-content-end list-unstyled d-none d-lg-flex">
                    <Nav.Link className="ms-3 link-dark"><FontAwesomeIcon icon={["fab", "facebook"]} /> <span className="d-md-none d-lg-none">Facebook</span></Nav.Link>
                    <Nav.Link className="ms-3 link-dark"><FontAwesomeIcon icon={["fab", "twitter"]} /> <span className="d-md-none d-lg-none">Twitter</span></Nav.Link>
                    <Nav.Link className="ms-3 link-dark"><FontAwesomeIcon icon={["fab", "instagram"]} /> <span className="d-md-none d-lg-none">Instagram</span></Nav.Link>
                    <Nav.Link className="ms-3 link-dark"><FontAwesomeIcon icon={["fab", "youtube"]} /> <span className=" d-md-none d-lg-none">Youtube</span></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Navbar bg="white" expand="sm" className="d-flex flex-wrap shadow">
            <Container fluid>
                <Navbar.Brand href={`${window.location.origin}`} className="m-4 m-md-0 "><Image src={logo} alt="" fluid className="d-inline-block align-top icon-shape" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="justify-content-center">
                    <Nav>
                        <Nav.Link className="fs-6" href="#home">Inicio</Nav.Link>
                        <Nav.Link className="fs-6" href="#about">Nosotros</Nav.Link>
                        <Nav.Link className="fs-6" href="#admin">Administradores</Nav.Link>
                        <Nav.Link className="fs-6" href="#neighbours">Vecinos</Nav.Link>
                        <Nav.Link className="fs-6" href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="float-end">
                    <ButtonLogin title="My Home - Portal " icon={["fas", "house-laptop"]}></ButtonLogin>
                </Nav>
            </Container>
        </Navbar>
    </header>
};

export default Header;