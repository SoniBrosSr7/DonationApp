import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./DonorHome.css";

export function DonorHome() {
  return (
    <Container className="text-center mt-5">
      <Alert variant="primary">Welcome to Donation App.</Alert>
      <p>In this page donor can register & donate.</p>
    </Container>
  );
}
