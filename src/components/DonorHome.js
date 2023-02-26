import { Alert, Container } from "react-bootstrap";

export function DonorHome(){
    return (
        <Container className="text-center mt-5">
            <Alert variant="primary">
                Welcome to Donor App.
            </Alert>
            <p>In this app you can perform CRUD operations in Donor.</p>
        </Container>
    );
}