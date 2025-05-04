// src/components/DoctorsCorner.js
import React from 'react';
import './DoctorsCorner.css';

const doctors = [
  {
    name: 'Dr. Rajesh Kumar',
    specialty: 'Agriculture Scientist',
    education: 'PhD in Agronomy, Punjab Agricultural University',
    contact: '+91-9876543210',
  },
  {
    name: 'Dr. Meera Sharma',
    specialty: 'Soil and Water Management',
    education: 'MSc in Soil Science, Indian Agricultural Research Institute',
    contact: '+91-8765432109',
  },
  {
    name: 'Dr. Suresh Gupta',
    specialty: 'Crop Protection Specialist',
    education: 'PhD in Plant Pathology, Tamil Nadu Agricultural University',
    contact: '+91-7654321098',
  },
  // Add more doctors as needed
];

const DoctorsCorner = () => {
  return (
    <div className="doctors-corner">
      <h2>Doctor's Corner</h2>
      <p>Get expert advice from our agriculture specialists.</p>
      <div className="doctors-list">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
            <p><strong>Education:</strong> {doctor.education}</p>
            <p><strong>Contact:</strong> {doctor.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsCorner;
