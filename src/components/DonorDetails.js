import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DonorDetails.css";

export function DonorDetails() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    // Fetch donors data from server
    axios.get("/donors").then((response) => {
      setDonors(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    // Delete donor with specified ID from server
    axios.delete(`/donors/${id}`).then(() => {
      // Update donors state after deletion
      setDonors(donors.filter((donor) => donor.id !== id));
    });
  };

  const handleUpdate = (id, updates) => {
    // Update donor with specified ID with new data (specified by 'updates' object) on server
    axios.patch(`/donors/${id}`, updates).then((response) => {
      // Update donors state after update
      setDonors(
        donors.map((donor) => {
          if (donor.id === response.data.id) {
            return { ...donor, ...response.data };
          } else {
            return donor;
          }
        })
      );
    });
  };

  return (
    <div className="donor-details">
      <h1>Donor Details</h1>
      <table>
        <thead>
          <tr>
            <th>Donor Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor.id}>
              <td>{donor.donorName}</td>
              <td>{donor.phone}</td>
              <td>{donor.email}</td>
              <td>
                <button
                  className="approve-button"
                  onClick={() => handleUpdate(donor.id, { isApproved: true })}
                >
                  Approve
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(donor.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
