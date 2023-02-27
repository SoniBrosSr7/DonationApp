import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";

export function BrowseCausesPage() {
  const [donationType, setDonationType] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDonationTypeChange = (event) => {
    setDonationType(event.target.value);
  };

  const handleDonationAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Stationary Needs</Card.Title>
              <Card.Text>
                According to a report by the National Sample Survey Office, only
                65% of Indian households have access to stationery items. This
                means that a large number of children and adults do not have
                access to basic stationery items such as notebooks, pens, and
                pencils. Your donation can help bridge this gap and provide
                access to education and learning opportunities for those in
                need. Let's come together to create a brighter future for all.
                Donate to our Stationary Needs campaign today.
              </Card.Text>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Donation Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter amount"
                    value={donationAmount}
                    onChange={handleDonationAmountChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Donate
                </Button>
              </Form>
              {showConfirmation && (
                <Alert className="mt-3" variant="success">
                  Thank you for your donation of {donationAmount} for stationary
                  needs!
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Food Needs</Card.Title>
              <Card.Text>
                Did you know that more than 194 million people in India are
                undernourished and struggle to have access to nutritious food?
                Your donation can make a difference in their lives. You can help
                us in our mission to end hunger and food insecurity in India.
              </Card.Text>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Donation Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter amount"
                    value={donationAmount}
                    onChange={handleDonationAmountChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Donate
                </Button>
              </Form>
              {showConfirmation && (
                <Alert className="mt-3" variant="success">
                  Thank you for your donation of {donationAmount} for food
                  needs!
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Clothing Needs</Card.Title>
              <Card.Text>
                Did you know that approximately 40% of India's population lives
                below the poverty line? Many of these individuals lack access to
                basic necessities like warm clothing. Your donation to our
                clothing drive can help provide essential clothing items to
                those in need. You can donate money to purchase new clothing, or
                even donate gently used clothing items that you no longer need.
                Your generosity can make a real difference in someone's life.
                Join us in making a positive impact in our community today!
              </Card.Text>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Donation Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter amount"
                    value={donationAmount}
                    onChange={handleDonationAmountChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Donate
                </Button>
              </Form>
              {showConfirmation && (
                <Alert className="mt-3" variant="success">
                  Thank you for your donation of {donationAmount} for food
                  needs!
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
