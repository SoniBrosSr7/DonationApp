import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./DonorHome.css";

export function DonorHome() {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Donation App</h1>
      <p className="lead">
        Our mission is to help you make a positive impact on the world by
        enabling you to easily donate to causes you care about.
      </p>
      <Row className="mt-5">
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Register as a Donor</Card.Title>
              <Card.Text>
                Create an account to keep track of your donations and get
                updates on causes you support.
              </Card.Text>
              <Button variant="primary" href="/donor-registration-from">
                Register Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Browse Causes</Card.Title>
              <Card.Text>
                Discover a wide range of causes that you can support through
                your donations.
              </Card.Text>
              <Button variant="primary" href="/browse-causes">
                View Causes
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Make a Donation</Card.Title>
              <Card.Text>
                Support a cause you care about with a donation of any amount.
              </Card.Text>
              <Button variant="primary" href="/donor-login">
                Donate Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
