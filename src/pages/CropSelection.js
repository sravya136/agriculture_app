// src/pages/CropSelection.js
import React, { useState } from 'react';
import './CropSelection.css';

const cropsData = {
  kharif: [
    { name: 'Paddy', growingMonths: 'June - October', link: 'https://youtu.be/FSABgTZVy_g?si=gIds_ZOZ-wm_QEsB', image: '/CS1.jpeg' },
    { name: 'Maize', growingMonths: 'June - September', link: 'https://youtu.be/SeUpT7S9dRI?si=crIfk6yiRvQbT650', image: '/CS2.jpeg' },
    { name: 'Cotton', growingMonths: 'June - November', link: 'https://youtu.be/gNCWjxAZcsY?si=bF344WFINdqHmbRZ', image: '/CS3.jpeg' },
    { name: 'Groundnut', growingMonths: 'June - September', link: 'https://youtu.be/Fy3a2a1YeKU?si=t_L1Hdstvy0S1hvk', image: '/CS4.jpeg' },
    { name: 'Sugarcane', growingMonths: 'June - March', link: 'https://youtu.be/ocz1fVKN5gE?si=LUlnPrENZDO5sUUl', image: '/CS5.jpeg' },
    { name: 'Turmeric', growingMonths: 'June - October', link: 'https://youtu.be/zqEczVvXRi4?si=kxZZA0AM4-C7F6S3', image: '/CS6.jpeg' },
  ],
  rabi: [
    { name: 'Wheat', growingMonths: 'October - April', link: 'https://youtu.be/swojd7FFUfg?si=Sr24K7TbAAcJvLIZ', image: '/CS7.jpeg' },
    { name: 'Peas', growingMonths: 'October - March', link: 'https://youtu.be/GMQft39J7XM?si=SnKfPECjUoqcnasN', image: '/CS8.jpeg' },
    { name: 'Sesame', growingMonths: 'October - February', link: 'https://youtu.be/bfH9c-EAGAA?si=D-tNyTb11DkU3VFe', image: '/CS9.jpeg' },
  ]
};

const CropSelection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all'); // 'all', 'kharif', 'rabi'

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const getFilteredCrops = () => {
    let crops = [];
    if (selectedFilter === 'kharif' || selectedFilter === 'all') {
      crops = crops.concat(cropsData.kharif);
    }
    if (selectedFilter === 'rabi' || selectedFilter === 'all') {
      crops = crops.concat(cropsData.rabi);
    }

    return crops.filter(crop => crop.name.toLowerCase().includes(searchTerm));
  };

  const filteredCrops = getFilteredCrops();

  return (
    <div className="crop-selection">
      <h2>Crop Selection</h2>
      <p>Get expert advice on selecting the right crops based on your region and soil type.</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a crop..."
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>

      <div className="filter-buttons">
        <button
          className={selectedFilter === 'all' ? 'active' : ''}
          onClick={() => handleFilterChange('all')}
        >
          All Crops
        </button>
        <button
          className={selectedFilter === 'kharif' ? 'active' : ''}
          onClick={() => handleFilterChange('kharif')}
        >
          Kharif Crops
        </button>
        <button
          className={selectedFilter === 'rabi' ? 'active' : ''}
          onClick={() => handleFilterChange('rabi')}
        >
          Rabi Crops
        </button>
      </div>

      <div className="crops">
        {filteredCrops.length > 0 ? (
          filteredCrops.map((crop, index) => (
            <div key={index} className="crop">
              <img src={crop.image} alt={crop.name} className="crop-image" />
              <a href={crop.link} target="_blank" rel="noopener noreferrer" className="crop-link">
                {crop.name}
              </a>
              <p>Growing Months: {crop.growingMonths}</p>
              <a href={crop.link} target="_blank" rel="noopener noreferrer">
                <button>Watch Process</button>
              </a>
            </div>
          ))
        ) : (
          <p>No crops found.</p>
        )}
      </div>
    </div>
  );
};

export default CropSelection;
