
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveDonor } from "../services/DonerApiService";

export function DonorRegistrationForm() {
    // Define state for form inputs and errors
    const [donorDetails, setDonorDetails] = useState({});
    // const [donorPhone, setDonorPhone] = useState("");
    // const [donorEmail, setDonorEmail] = useState("");
    // const [donorPassword, setDonorPassword] = useState("");
     const [confirmDonorPassword, setConfirmDonorPassword] = useState("");

    //for error State
    const [donorNameError, setDonorNameError] = useState("");
    const [donorPhoneError, setDonorPhoneError] = useState("");
    const [donorEmailError, setDonorEmailError] = useState("");
    const [donorPasswordError, setDonorPasswordError] = useState("");
    const [confirmDonorPasswordError, setConfirmDonorPasswordError] = useState("");

    const handleChange = (e) => {
        setDonorDetails({...donorDetails, [e.target.name]:e.target.value});
       
    //     donorPhone = e.target.value;
    //     donorEmail =e.target.value;
    //    donorPassword = e.target.value;


    // const [formData, setFormData] = useState({  donorName: '' ,
    //                                             donorPhone:'',
    //                                             donorEmail:'',
    //                                             donorPassword:''

    // });
};

    // Define function to handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        // Validate form inputs
        if (!validate()) 
        {
            return;
        }
        else{
            // setFormData({...formData,[donorName]: donorName,
            //     [donorPhone]: donorPhone,
            //     [donorEmail]: donorEmail,
            //     [donorPassword]: donorPassword
            // }); 

            const formData={donorName: donorDetails.donorName,
                    donorPhone: donorDetails.donorPhone,
                    donorEmail: donorDetails.donorEmail,
                    donorPassword: donorDetails.donorPassword
                }

            const response = await saveDonor(formData);
            console.log(response.data);
            if (response.status === 200) {
              setDonorDetails({donorName: '',
                donorPhone: '',
                donorEmail: '',
                donorPassword: '',
                donorConfirmPassword: ''});
            }
        }
      
       
    };

    const validate = () => {
        let isValid = true;
        // donorName validation
        if (donorDetails.donorName.trim() === '') {
            setDonorNameError('donorName is required');
            isValid = false;
        } else if (!/^[a-zA-Z0-9\s]+$/.test(donorDetails.donorName)) {
            setDonorNameError('donorName can only contain letters and numbers');
            isValid = false;
        } else {
            setDonorNameError('');
        }

         // donorPhone validation
         if (donorDetails.donorPhone.trim() === '') {
            setDonorPhoneError('donorPhone number is required');
            isValid = false;
          } else if (!/^[0-9]+$/.test(donorDetails.donorPhone) ) {
            setDonorPhoneError('donorPhone number can only contain numbers');
            isValid = false;
          } 
         else if (donorDetails.donorPhone.length!=10 ) {
            setDonorPhoneError('donorPhone number must be 10 digit');
            isValid = false;
          }
          else {
            setDonorPhoneError('');
          }
          
        // donorEmail validation
        if (donorDetails.donorEmail.trim() === '') {
            setDonorEmailError('donorEmail is required');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donorDetails.donorEmail)) {
            setDonorEmailError('Email is not valid');
            isValid = false;
        } else {
            setDonorEmailError('');
        }

        // password validation
        if (donorDetails.donorPassword.trim() === '') {
            setDonorPasswordError('donorPassword is required');
            isValid = false;
        } else if (donorDetails.donorPassword.length < 8) {
            setDonorPasswordError('donorPassword must be at least 8 characters long');
            isValid = false;
        } else {
            setDonorPasswordError('');
        }
        // Confirm password validation 
        if (donorDetails.donorConfirmPassword.trim() === '') {
            setConfirmDonorPasswordError('confirmDonorPassword is required');
            isValid = false;
        } else if (donorDetails.donorPassword !== donorDetails.donorConfirmPassword) {
            setConfirmDonorPasswordError('Password Not Matched');
            isValid = false;
        } else {
            setConfirmDonorPasswordError('');
        }
        return isValid;
    };
  
    return (
        <>
            <Container className="mt-4">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Donor Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name='donorName' value={donorDetails.donorName} onChange={handleChange} />
                                {donorNameError && <span style={{ color: "red" }}>{donorNameError} </span> }
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label> Donor Phone Number:</Form.Label>
                                <Form.Control type="text" placeholder="Enter phone" name='donorPhone' value={donorDetails.donorPhone} onChange={handleChange} />
                                {donorPhoneError && <span  style={{ color: "red" }}>{donorPhoneError}</span>}
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Donor Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='donorEmail' value={donorDetails.donorEmail}  onChange={handleChange} />
                                {donorEmailError && <span style={{ color: "red" }}>{donorEmailError}</span>}
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Donor Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" name='donorPassword' value={donorDetails.donorPassword}  onChange={handleChange} />
                                {donorPasswordError && <span  style={{ color: "red" }}>{donorPasswordError}</span>}
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm DonorPassword</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" name='donorConfirmPassword' value={donorDetails.donorConfirmPassword} onChange={handleChange} />
                                {confirmDonorPasswordError && <span  style={{ color: "red" }}>{confirmDonorPasswordError}</span> }                          
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type='submit' variant="success">Register Donor</Button>
                </Form>
            </Container>

        </>
    );
};


