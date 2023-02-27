import { Component } from "react";
import { Alert, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { saveDonor } from "../services/StudentApiService";

        // Check if the phoneNumber matches the regex and has 10 digits (assuming a standard 10-digit mobile number)
        return phoneNumberRegex.test(phoneNumber) && phoneNumber.length === 10;
    };
    // Define function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form inputs
        const validationErrors = {};
        if (!donorName.trim()) {
            validationErrors.donorName = "donorName is required";
        } else if (donorName.length <= 8) {
            validationErrors.password = "Password must be at least 8 characters long";
        }

export class DonorRegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            formData:{},
            modalOpeningStatus: false,
            defaultValues:{id:'',name:''}
        }
    }
   
    openDialog=()=>{
        this.setState({modalOpeningStatus:true});
    }
    closeDialog=()=>{
        this.setState({modalOpeningStatus:false});
    }
    handleChange = (event) => {
        this.setState(
            { 
                formData: {...this.state.formData,
                        [event.target.name]:event.target.value
                    } 
            }
        );
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await saveDonor(this.state.formData);
        console.log(response.data);
        if(response.status==200){
            this.setState({formData:{id:''}});
            this.openDialog();
        }
        
    }
    render() {
        return (
            <>
                <Container className="mt-4 text-center">
                    <Alert>Donor registration form</Alert>
                </Container>
                <Container className="mt-4">
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>DonorId</Form.Label>
                                    <Form.Control type="text" readOnly={true} value={this.state.formData.id} placeholder="Auto Genrated"  name='id' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>DonorName</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name='name' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>DonorPhone</Form.Label>
                                    <Form.Control type="text" placeholder="Enter phone" name='phone' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>DonorEmail</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name='email' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>DonorPassword</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password" name='pass' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Confirm DonorPassword</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" name='cpass' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Button type='submit' variant="success">Register Donor</Button>
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