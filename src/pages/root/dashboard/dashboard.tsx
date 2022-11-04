import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Dropdown, ListGroup, Navbar, NavDropdown, Row, Table } from "react-bootstrap";
import Sidebar from "./sidebar";


const notification = (<><FontAwesomeIcon icon={["fas", "bell"]} size="1x" />
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        5+
    </span>
</>);
const Dashboard = () => {
    return <div className="d-flex flex-nowrap">
        <Sidebar />
        <Container fluid>
            <Row>
                <Navbar bg="white" expand="lg" className="shadow-lg p-3">
                    <Container fluid className="d-flex justify-content-end">
                        <NavDropdown id="nav-notification" title={notification} align="end" className="mx-5">
                            <ListGroup variant="flush" className="m-0 p-0 rounded" style={{ width: "50vh" }}>
                                <ListGroup.Item action active>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                                    <small>And some small print.</small>
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                                    <small>And some small print.</small>
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                                    <small>And some small print.</small>
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                                    <small>And some small print.</small>
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                                    <small>And some small print.</small>
                                </ListGroup.Item>
                            </ListGroup>
                        </NavDropdown>
                        <NavDropdown id="nav-profile" title={<><FontAwesomeIcon icon={["fas", "user"]} size="1x" /> <span>Duilio Mamani</span></>} align="end">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Container>
                </Navbar>
            </Row>
            <Row>
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
            </Row>
        </Container>
    </div >;
};

export default Dashboard;