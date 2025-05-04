// src/pages/GovernmentScheme.js
import React from 'react';
import './GovernmentScheme.css';

const schemes = [
  {
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    link: "https://www.pmkisan.gov.in/",
    videoLink: "https://youtu.be/2gFdm93XxQ4?si=c4-FFAwLSanefgSZ",
    use: "Provides income support of ₹6,000 per year to small and marginal farmers.",
    documents: ["Aadhaar card", "Bank account details", "Landholding documents"],
  },
  {
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    link: "https://pmfby.gov.in/",
    videoLink: "https://youtu.be/h5Y2MwNmr-s?si=QcvXYQGQa8JcLEAw",
    use: "Offers crop insurance to cover losses due to natural calamities, pests, and diseases.",
    documents: ["Aadhaar card", "Landholding documents", "Crop sowing certificate"],
  },
  {
    name: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
    link: "https://pmksy.gov.in/",
    videoLink: "https://youtu.be/wSkSt7OAdeI?si=yS79OzggW5hFoFdK",
    use: "Aims to improve irrigation facilities and water efficiency.",
    documents: ["Landholding documents", "Irrigation project plan"],
  },
  {
    name: "Kisan Credit Card (KCC) Scheme",
    link: "https://www.pnbindia.in/kisan-credit-card.html",
    videoLink: "https://youtu.be/mmorh39fZmo?si=oGGeAhCw1AdIQM3F",
    use: "Provides short-term credit to farmers for agricultural and allied activities.",
    documents: ["Aadhaar card", "Landholding documents", "Bank account details"],
  },
  {
    name: "Soil Health Card Scheme",
    link: "https://soilhealth.dac.gov.in/",
    videoLink: "https://youtu.be/xpnA7DQhFZk?si=g97irOcdYiAYaoFi",
    use: "Provides soil health information and recommendations to farmers.",
    documents: ["Landholding documents", "Soil sample details"],
  },
  {
    name: "Paramparagat Krishi Vikas Yojana (PKVY)",
    link: "https://pgsindia-ncof.gov.in/pkvy/",
    videoLink: "https://youtu.be/kAlNM6G6cC4?si=Fpn7YlVnL4dIcDPD",
    use: "Promotes organic farming and sustainable agricultural practices.",
    documents: ["Landholding documents", "Organic farming plan"],
  },
  {
    name: "National Agriculture Market (eNAM)",
    link: "https://www.enam.gov.in/web/",
    videoLink: "https://youtu.be/T16b0_txPUA?si=YY42rB72hYaYqQrO",
    use: "Connects farmers with buyers through an online trading platform.",
    documents: ["Aadhaar card", "Landholding documents"],
  },
  {
    name: "Pradhan Mantri Kisan Maandhan Yojana (PM-KMY)",
    link: "https://maandhan.in/",
    videoLink: "https://youtu.be/xkKRb-xG8dc?si=DCw28zfqwu03f_QC",
    use: "Provides a pension of ₹3,000 per month to small and marginal farmers after age 60.",
    documents: ["Aadhaar card", "Bank account details", "Landholding documents"],
  },
  {
    name: "Rashtriya Krishi Vikas Yojana (RKVY)",
    link: "http://rkvy.nic.in/",
    videoLink: "https://youtube.com/shorts/cL_di1b_6Sc?si=DTdGnSmKc6pa_VYP",
    use: "Promotes holistic development of agriculture and allied sectors.",
    documents: ["Project proposal", "Landholding documents"],
  },
  {
    name: "National Food Security Mission (NFSM)",
    link: "https://nfsm.gov.in/",
    videoLink: "https://youtu.be/8fZBitXm_KU?si=PYQmtGsao-OfwLv5",
    use: "Aims to increase the production of rice, wheat, pulses, and coarse cereals.",
    documents: ["Landholding documents", "Crop sowing certificate"],
  },
];

const GovernmentScheme = () => {
  return (
    <div className="schemes-container">
      <h1>Government Schemes for Farmers</h1>
      <ul className="schemes-list">
        {schemes.map((scheme, index) => (
          <li key={index} className="scheme-item">
            <h2>{scheme.name}</h2>
            <p><strong>Use:</strong> {scheme.use}</p>
            <p><strong>Required Documents:</strong> {scheme.documents.join(', ')}</p>
            <div className="link-container">
              <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                <button className="apply-button">Apply</button>
              </a>
              <a href={scheme.videoLink} target="_blank" rel="noopener noreferrer">
                <button className="video-button">Watch Video to Apply</button>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GovernmentScheme;
