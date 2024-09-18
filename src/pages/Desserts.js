import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Desserts.css'; // Ensure this path is correct
import Footer from './Footer'; // Ensure this path is correct
import gulabImage from '../images/gulab-jamun.jpg'; // Ensure the path is correct
import rasgullaImage from '../images/rasgulla.jpg'; // Ensure the path is correct
import kheerImage from '../images/kheer.jpg'; // Ensure the path is correct

function Desserts({ cartCounts, setCartCounts }) {
    const items = {
        gulabJamun: { price: 80, image: gulabImage },
        rasgulla: { price: 70, image: rasgullaImage },
        kheer: { price: 100, image: kheerImage },
    };

    const handleAddToCart = (item) => {
        setCartCounts(prevCounts => ({
            ...prevCounts,
            [item]: (prevCounts[item] || 0) + 1
        }));
    };

    const handleRemoveFromCart = (item) => {
        setCartCounts(prevCounts => ({
            ...prevCounts,
            [item]: Math.max((prevCounts[item] || 0) - 1, 0)
        }));
    };

    return (
        <div className="section-container">
            <Link to="/menu" className="btn-back">Back</Link>
            <h2 className="desserts-heading">Desserts</h2>
            <div className="items-grid">
                {Object.entries(items).map(([item, { price, image }]) => (
                    <div key={item} className="item">
                        <img src={image} alt={item} />
                        <h3>{item.charAt(0).toUpperCase() + item.slice(1)}</h3>
                        <p>Delicious {item}</p>
                        <p>₹{price}</p>
                        <div className="cart-controls">
                            <button 
                                className="btn-quantity" 
                                onClick={() => handleRemoveFromCart(item)}
                            >
                                -
                            </button>
                            <span className="quantity-display">{cartCounts[item] || 0}</span>
                            <button 
                                className="btn-quantity" 
                                onClick={() => handleAddToCart(item)}
                            >
                                +
                            </button>
                            {cartCounts[item] > 0 && (
                                <a href="#!" className="btn-buy-now">Buy Now</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Desserts;
