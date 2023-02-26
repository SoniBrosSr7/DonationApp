import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { editDonorFromServer, getDonorFromServer } from "../services/DonerApiService";
// import { deleteStudentFromServer, getAllStudentsFromServer } from "../services/StudentApiService";

export function DonorProfile() {

    const [donorDetails, setDonorDetails] = useState([]);
    const [donorId, setDonorId] = useState('');
    const [isModalOpened,setIsModalOpened] = useState(false);

    const openModal = ()=>{
        setIsModalOpened(true);
    }
    const closeModal = ()=>{
        setIsModalOpened(false);
    }
    async function getDonor() {
        const response = await getDonorFromServer();
        setDonorDetails(response.data);
    }
    const editDonor = async()=>{
        const response=await editDonorFromServer(donorId);
        console.log(response.data);
        closeModal();
        getDonor();
    }

    useEffect(() => {
        donorDetails();
    }, []);

    return (
        <>
            <Container className="mt-4 mb-4 text-center">
                <Alert>
                    List of all the students
                </Alert>
            </Container>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Marks</th>
                            <th>Email</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            donorDetails.map((donor) => {
                                return (
                                    <tr>
                                        <td>{donor.id}</td>
                                        <td>{donor.name}</td>
                                        <td>+91-{donor.phone}</td>
                                        <td>{donor.email}</td>
                                        <td>{donor.password}</td>

                                        <td><Button variant="primary" className="btn-sm" onClick={() => {
                                            setDonorId(donor.id);
                                            openModal();
                                        }}>Edit</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
            <Modal show={isModalOpened} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete student with id {donorId}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={editDonor}>
                       Yes, Edit
                    </Button>
                    <Button variant="primary" onClick={closeModal}>
                       No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}