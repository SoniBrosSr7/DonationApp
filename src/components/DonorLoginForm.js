import { Component } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { getDonor } from "../services/StudentApiService";

export class DonorLoginForm extends Component {
  constructor() {
    super();
    this.state = {
      formData: {},
      modalOpeningStatus: false,
      defaultValues: { id: "", name: "" },
    };
  }

  openDialog = () => {
    this.setState({ modalOpeningStatus: true });
  };
  closeDialog = () => {
    this.setState({ modalOpeningStatus: false });
  };
  handleChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await getDonor(this.state.formData);
    console.log(response.data);
    if (response.status == 200) {
      this.setState({ formData: { id: "" } });
      this.openDialog();
    }
  };
  render() {
    return (
      <>
        <Container className="mt-4 text-center">
          <Alert>Donor Login Form</Alert>
        </Container>
        <Container className="mt-4 text-center">
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>DonorId</Form.Label>
                  <Form.Control
                    type="text"
                    style={{ textAlign: "center" }}
                    placeholder="Enter id"
                    name="id"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}></Col>
            </Row>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    style={{ textAlign: "center" }}
                    placeholder="Enter Password"
                    name="pass"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}></Col>
            </Row>

            <Button type="submit" variant="success">
              Donor Login
            </Button>
          </Form>
        </Container>
        <Modal show={this.state.modalOpeningStatus} onHide={this.closeDialog}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>Donor registered!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.closeDialog}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
