import { Container, Row } from "react-bootstrap";
import LogoutButton from "../auth/logout";


const Onboarding = () => {
    return <Container fluid>
        <Row className="text-center">
            <LogoutButton title="Logout" icon={["fas", "door-open"]} />
        </Row>
    </Container>
};

export default Onboarding;