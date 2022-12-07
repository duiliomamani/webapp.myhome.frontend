import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardGroup, Container, ListGroup, Navbar, NavDropdown, Row, Table } from "react-bootstrap";
import LogoutButton from "../../shared/auth0/logout";
import Sidebar from "./sidebar";

import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../../assets/images/logo-center.png';

const notification = (<><FontAwesomeIcon icon={["fas", "bell"]} size="1x" />
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        5+
    </span>
</>);

const Dashboard = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if(!isAuthenticated){
        return <></>;
    }

    return <div className="d-flex flex-nowrap">
        <Sidebar />
        <Container fluid>
            <Row>
                <Navbar bg="white" expand="lg" className="shadow-lg p-3">
                    <Container fluid className="d-flex justify-content-end">
                        <NavDropdown id="nav-notification" title={notification} navbar={true} align="end" className="mx-5">
                            <NavDropdown.Header className="py-3">Notifications</NavDropdown.Header>
                            <ListGroup variant="flush" style={{ width: "50vh" }}>
                                <ListGroup.Item action active>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">List group item heading</h6>
                                        <small>3 days ago</small>
                                    </div>
                                    <small>And some small print.</small>
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">List group item heading</h6>
                                        <small>3 days ago</small>
                                    </div>
                                    <small>And some small print.</small>
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">List group item heading</h6>
                                        <small>3 days ago</small>
                                    </div>
                                    <small>And some small print.</small>
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">List group item heading</h6>
                                        <small>3 days ago</small>
                                    </div>
                                    <small>And some small print.</small>
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">List group item heading</h6>
                                        <small>3 days ago</small>
                                    </div>
                                    <small>And some small print.</small>
                                </ListGroup.Item>
                            </ListGroup>
                            <div className="d-grid gap-2">
                                <Button variant="outline-primary">
                                    <FontAwesomeIcon icon={["fas", "comments"]} /> Show more notifications
                                </Button>
                            </div>
                        </NavDropdown>
                        <NavDropdown id="nav-profile" title={<><FontAwesomeIcon icon={["fas", "user"]} size="1x" /> <span>{user?.name}</span></>} align="end">
                            <NavDropdown.Header className="py-3">Rol : Administrador</NavDropdown.Header>
                            <NavDropdown.Item href="#action/3.1"><FontAwesomeIcon icon={["fas", "user"]} /> Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><FontAwesomeIcon icon={["fas", "gear"]} /> Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"><FontAwesomeIcon icon={["fas", "mobile-screen"]} /> Something</NavDropdown.Item>
                            <div className="d-grid gap-2">
                                <LogoutButton title="Logout" icon={["fas", "door-open"]} />
                            </div>
                        </NavDropdown>
                    </Container>
                </Navbar>
            </Row>
            <Row>
                <Container fluid>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to
                                    additional content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Container>
            </Row>
            <Row>
                <Container fluid>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Row>
        </Container>
    </div>;
};

export default Dashboard;