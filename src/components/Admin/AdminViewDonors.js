import { useEffect, useState } from "react";
import { Alert,  Container, Table } from "react-bootstrap";

export function AdminViewDonors() {

    const [studentsList, setStudentsList] = useState([]);
    const [selectedStudentId, setSelectedStudentId] = useState('');

    useEffect(() => {
        //getAllStudents();
    }, []);

    return (
        <>
            <Container className="mt-4 mb-4 text-center">
                <Alert>
                    List of all the Donations Made
                </Alert>
            </Container>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>DonorId</th>
                            <th>DonorName</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}