import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import Moment from "react-moment";

/* Files */
import logo from '../../../assets/images/logo-principal.png';

const Footer = () => {
    return <footer className="d-flex shadow border-top py-5 bg-white">
        <Container fluid>
            <Row className="text-center">
                <Col md={4}>
                    <Nav className="justify-content-center justify-content-md-start">
                        <Nav.Link className="link-dark"><FontAwesomeIcon icon={["fab", "facebook"]} size="xl" /> <span className="d-none d-lg-block">Facebook</span></Nav.Link>
                        <Nav.Link className="link-dark"><FontAwesomeIcon icon={["fab", "twitter"]} size="xl" /> <span className="d-none d-lg-block">Twitter</span></Nav.Link>
                        <Nav.Link className="link-dark"><FontAwesomeIcon icon={["fab", "instagram"]} size="xl" /> <span className="d-none d-lg-block">Instagram</span></Nav.Link>
                        <Nav.Link className="link-dark"><FontAwesomeIcon icon={["fab", "youtube"]} size="xl" /> <span className=" d-none d-lg-block">Youtube</span></Nav.Link>
                    </Nav>
                </Col>
                <Col md={4}>
                    <Image src={logo} className="img-gray-scale d-inline-block align-top m-4 m-md-0" />
                </Col>
                <Col md={4}>
                    <p className="text-muted">© <Moment format="yyyy" date={Date.now()}></Moment> - MyHome. Todos los derechos reservados</p>
                    <p className="text-muted">Desarrollado por CactusTech</p>
                </Col>
            </Row>
        </Container>
    </footer>
};

export default Footer;