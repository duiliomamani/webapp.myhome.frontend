import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row, Image, Card } from "react-bootstrap";

import mobile from '../../../assets/images/mobile-mockup.png';

const services: any = [{
    link: '#',
    title: 'Pagos en linea',
    description: 'Integración de pagos a través de MyHomeApp',
    icon: 'file-invoice-dollar',
    color: 'text-primary'
},
{
    link: '#',
    title: 'Administración segura',
    description: 'Seguridad y monitoreo digital en vivo',
    icon: 'building-shield',
    color: 'text-danger'
},
{
    link: '#',
    title: 'Comunicaciones centralizadas',
    description: 'Seguridad y monitoreo digital',
    icon: 'bullhorn',
    color: 'text-info'
},
{
    link: '#',
    title: 'Reservas de espacios comunes',
    description: 'Seguridad y monitoreo digital',
    icon: 'calendar-week',
    color: 'text-warning'
}];

const Home = () => {
    return (
        <>
            <Container key="jumbotron" className="py-5">
                <Row>
                    <Col lg={6} md={8}>
                        <h1 className="display-4 fw-bold">My Home App</h1>
                        <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed ac elit urna. Aenean quis mollis ex, eget euismod metus.
                            Phasellus condimentum velit eget risus venenatis, a eleifend velit luctus.</p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-dark btn-lg" href="#" role="button"> <FontAwesomeIcon icon={["fab", "google-play"]} /> Disponible en Google Play</a>
                            <a className="btn btn-dark btn-lg" href="#" role="button"> <FontAwesomeIcon icon={["fab", "apple"]} /> Obtener en AppStore</a>
                        </div>
                    </Col>
                    <Col lg={6} md={4}>
                        <Image fluid src={mobile}></Image>
                    </Col>
                </Row>
            </Container>
            <Container key="services" className="py-3">
                <Row sm={2} md={4} lg={4} className="justify-content-center">
                    {services.map(
                        (newItem: any, index: number) => {
                            return (
                                <Col key={`services-${index}`} className="p-4">
                                    <Card className="border-0 shadow">
                                        <Card.Body>
                                            <div className="icon-shape">
                                                <FontAwesomeIcon icon={newItem.icon} className={newItem.color} size="3x" />
                                            </div>
                                            <Card.Title className="text-darkm-0">{newItem.title}</Card.Title>
                                            <Card.Text className="m-0"><small>{newItem.description}</small></Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        }
                    )}
                </Row>
            </Container>
        </>
    );
};

export default Home;