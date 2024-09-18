import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RiceItems.css'; // Ensure this points to the correct CSS
import Footer from './Footer'; // Ensure this path is correct
import biryaniImage from '../images/biryani.jpg'; // Update paths to your images
import pulaoImage from '../images/pulao.jpg';
import friedRiceImage from '../images/fried-rice.jpg';

function RiceItems({ cartCounts, setCartCounts }) {
    const items = {
        biryani: { price: 250, image: biryaniImage },
        pulao: { price: 200, image: pulaoImage },
        friedRice: { price: 180, image: friedRiceImage },
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
        <div className="rice-container">
            <Link to="/menu" className="btn-back">Back</Link>
            <h1 className="rice-heading">Rice Items</h1>
            <div className="rice-items-grid">
                {Object.entries(items).map(([item, { price, image }]) => (
                    <div key={item} className="rice-item">
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

export default RiceItems;
