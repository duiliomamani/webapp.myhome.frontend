import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Nav, Navbar } from "react-bootstrap";
import logo from '../../../assets/images/logo-principal.png';
import LogoutButton from "../../shared/auth0/logout";


const Sidebar = () => {
    return <Navbar bg="light" className="d-flex p-3 flex-column shadow-lg" style={{ width: "280px" }}>
        <Navbar.Brand href={`${window.location.origin}`}><Image src={logo} alt="" fluid className="icon-shape" /> MyHome App</Navbar.Brand>
        <hr />
        <Nav className="flex-column w-100" >
            <Nav.Link className="fs-6 my-1" active><FontAwesomeIcon icon={["fas", "house"]} size="1x" /> Home</Nav.Link>
            <Nav.Link className="fs-6 my-1"><FontAwesomeIcon icon={["fas", "gauge-high"]} size="1x" /> Dashboard</Nav.Link>
            <Nav.Link className="fs-6 my-1"><FontAwesomeIcon icon={["fas", "user"]} size="1x" /> Profile</Nav.Link>
            <Nav.Link className="fs-6 my-1"><FontAwesomeIcon icon={["fas", "gear"]} size="1x" /> Settings</Nav.Link>
            <Nav.Link className="fs-6 my-1"><FontAwesomeIcon icon={["fas", "folder-open"]} size="1x" /> Reports</Nav.Link>
            <Nav.Item className="align-bottom p-5">
                <LogoutButton title="Logout" icon={["fas", "door-open"]} />
            </Nav.Item>
        </Nav>
    </Navbar>;
};

export default Sidebar;