import React, { useState } from 'react';
import './RawMaterialSupply.css';

const RawMaterialSupply = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Organic Wheat Seeds', category: 'seeds', price: 50, rating: 4.5, image: '/image1.jpeg' },
    { id: 2, name: 'Organic Rice Seeds', category: 'seeds', price: 60, rating: 4.7, image: '/image2.jpeg' },
    { id: 3, name: 'Hybrid Corn Seeds', category: 'seeds', price: 55, rating: 4.6, image: '/image3.jpeg' },
    { id: 4, name: 'Sunflower Seeds', category: 'seeds', price: 45, rating: 4.4, image: '/image4.jpeg' },
    { id: 5, name: 'Tomato Seeds', category: 'seeds', price: 35, rating: 4.8, image: '/image5a.jpeg' },
    { id: 6, name: 'Compost Fertilizer', category: 'organic-fertilizers', price: 30, rating: 4.2, image: '/image6.jpeg' },
    { id: 7, name: 'Vermicompost', category: 'organic-fertilizers', price: 40, rating: 4.8, image: '/image7.jpeg' },
    //{ id: 8, name: 'Bone Meal Fertilizer', category: 'organic-fertilizers', price: 25, rating: 4.1, image: '/image8.jpeg' },
    //{ id: 9, name: 'Fish Emulsion', category: 'organic-fertilizers', price: 20, rating: 4.3, image: '/image9.jpeg' },
    { id: 10, name: 'Kelp Meal', category: 'organic-fertilizers', price: 22, rating: 4.5, image: '/image10.jpeg' },
    //{ id: 11, name: 'Pesticide Spray', category: 'pesticides', price: 15, rating: 4.0, image: '/image11.jpeg' },
    { id: 12, name: 'Neem Oil', category: 'pesticides', price: 18, rating: 4.6, image: '/image12.jpg' },
   // { id: 13, name: 'Herbicide', category: 'pesticides', price: 20, rating: 4.2, image: '/image13.jpeg' },
    //{ id: 14, name: 'Insecticide', category: 'pesticides', price: 25, rating: 4.4, image: '/image14.jpeg' },
    { id: 15, name: 'Garden Soil', category: 'soil', price: 12, rating: 4.3, image: '/image15.jpeg' },
    { id: 16, name: 'Peat Moss', category: 'soil', price: 30, rating: 4.7, image: '/image16.jpeg' },
    { id: 17, name: 'Sand for Potting Mix', category: 'soil', price: 15, rating: 4.1, image: '/image17.jpeg' },
    { id: 18, name: 'Clay Soil Conditioner', category: 'soil', price: 28, rating: 4.2, image: '/image18.jpeg' },
    //{ id: 19, name: 'Plant Growth Regulator', category: 'growth-regulators', price: 35, rating: 4.4, image: '/image19.jpeg' },
    { id: 20, name: 'Organic Mulch', category: 'mulch', price: 25, rating: 4.5, image: '/image20.jpeg' }
    // Add more products as needed
  ];

  const filteredProducts = products.filter(product => 
    (selectedCategory === 'all' || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalCost = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="raw-material-supply">
      <h2>Raw Material Supply</h2>
      <p>Find the best suppliers for seeds, fertilizers, pesticides, and other farming essentials.</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="categories">
        <button onClick={() => setSelectedCategory('seeds')}>Seeds</button>
        <button onClick={() => setSelectedCategory('organic-fertilizers')}>Organic Fertilizers</button>
        <button onClick={() => setSelectedCategory('pesticides')}>Pesticides</button>
        <button onClick={() => setSelectedCategory('soil')}>Soil</button>
        <button onClick={() => setSelectedCategory('growth-regulators')}>Growth Regulators</button>
        <button onClick={() => setSelectedCategory('mulch')}>Mulch</button>
        <button onClick={() => setSelectedCategory('all')}>All</button>
      </div>

      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Rating: {product.rating} ⭐</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h3>Cart</h3>
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            <p>{product.name}</p>
            <p>Price: ₹{product.price}</p>
          </div>
        ))}
        <h4>Total Cost: ₹{totalCost}</h4>
        <button>Proceed to Buy</button>
      </div>
    </div>
  );
};

export default RawMaterialSupply;
