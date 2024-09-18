import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Breads.css';
import Footer from './Footer'; // Ensure this path is correct
import naanImage from '../images/naan.jpg'; // Ensure the path is correct
import rotiImage from '../images/roti.jpg'; // Ensure the path is correct

function Breads({ cartCounts, setCartCounts }) {
    const items = {
        naan: { price: 50, image: naanImage },
        roti: { price: 30, image: rotiImage },
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
        <div className="breads-container">
            <Link to="/menu" className="btn-back">Back</Link>
            <h1 className="breads-heading">Breads</h1>
            <div className="breads-items-grid">
                {Object.entries(items).map(([item, { price, image }]) => (
                    <div key={item} className="breads-item">
                        <img src={image} alt={item} />
                        <h3>{item.charAt(0).toUpperCase() + item.slice(1)}</h3>
                        <p className="item-price">₹{price}</p>
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

export default Breads;
