import { Alert, Container } from "react-bootstrap";

export function DonorHome(){
    return (
        <Container className="text-center mt-5">
            <Alert variant="primary">
                Welcome to Donation App.
            </Alert>
            <p>In this page donor can register & donate.</p>
        </Container>
    );
}