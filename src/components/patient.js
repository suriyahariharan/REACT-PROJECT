import React from 'react';
import './patient.css';
import Navbar from './Navbar';
const patient = () => {
  const doctorDetails = {
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    experience: '15 years',
    education: 'MD in Cardiology, University Medical School',
    contact: '123-456-7890',
    address: '123 Medical Street, Cityville',
  };

  return (
    <div className="doctor-info-container">

      <h2>Doctor Information</h2>
      <div className="doctor-details">
        <p>
          <strong>Name:</strong> {doctorDetails.name}
        </p>
        <p>
          <strong>Specialization:</strong> {doctorDetails.specialization}
        </p>
        <p>
          <strong>Experience:</strong> {doctorDetails.experience}
        </p>
        <p>
          <strong>Education:</strong> {doctorDetails.education}
        </p>
        <p>
          <strong>Contact:</strong> {doctorDetails.contact}
        </p>
        <p>
          <strong>Address:</strong> {doctorDetails.address}
        </p>
      </div>
    </div>
  );
};

export default patient;