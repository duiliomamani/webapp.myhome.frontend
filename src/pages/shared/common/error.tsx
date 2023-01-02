import { useAuth0 } from "@auth0/auth0-react";
import { Button, Card, Container } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    let error: any = useRouteError();
    console.error(error);

    const { isAuthenticated } = useAuth0();

    const returnTo = (isAuthenticated: boolean) => {
        if (!isAuthenticated) {
            window.location.href = "/";
        }
        else {
            window.location.href = "/dashboard";
        }
    }
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <main key="error-page">
                <Container fluid className="text-center d-flex justify-content-center" >
                    <Card className="text-center p-3 shadow-lg">
                        <Card.Body>
                            <Card.Text className="py-3">
                                <h1 className="display-5 fw-bold">404</h1>
                                <h1 className="display-6 fw-bold"> Page not found</h1>
                                <p className="lead mb-4">Sorry, we can't find the page you're looking for. </p>
                            </Card.Text>
                            <Button variant="primary" onClick={() => returnTo(isAuthenticated)}>Go to page home</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </main>
        </div>
    );
}
export default ErrorPage;