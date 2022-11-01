import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import LogoutButton from "../auth0/logout";


const Onboarding = () => {
    return <Container fluid>
        <Row className="text-center">
            <LogoutButton title="Logout" icon={["fas", "door-open"]} />
        </Row>
    </Container>
};

export default Onboarding;