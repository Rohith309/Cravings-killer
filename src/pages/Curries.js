import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Curries.css'; // Ensure this points to the correct CSS
import Footer from './Footer'; // Ensure this path is correct
import paneerButterMasalaImage from '../images/paneer-butter-masala.jpg'; // Update paths to your images
import chickenTikkaMasalaImage from '../images/chicken-tikka-masala.jpg';
import kajuPaneerImage from '../images/kaju-paneer.jpg';

function Curries({ cartCounts, setCartCounts }) {
    const items = {
        paneerButterMasala: { price: 300, image: paneerButterMasalaImage },
        chickenTikkaMasala: { price: 350, image: chickenTikkaMasalaImage },
        kajuPaneer: { price: 320, image: kajuPaneerImage },
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
        <div className="curries-container">
            <Link to="/menu" className="btn-back">Back</Link>
            <h1 className="curries-heading">Curries</h1>
            <div className="curries-items-grid">
                {Object.entries(items).map(([item, { price, image }]) => (
                    <div key={item} className="curries-item">
                        <img src={image} alt={item} />
                        <h3>{item.split(/(?=[A-Z])/).join(' ').replace(/^\w/, c => c.toUpperCase())}</h3>
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

export default Curries;
