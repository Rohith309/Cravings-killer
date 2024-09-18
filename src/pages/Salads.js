import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Salads.css'; // Ensure this path is correct
import Footer from './Footer'; // Ensure this path is correct
import ceaserImage from '../images/caesar-salad.jpg'; // Ensure the path is correct
import greekImage from '../images/greek-salad.jpg'; // Ensure the path is correct

function Salads({ cartCounts, setCartCounts }) {
    const items = {
        caesarSalad: { price: 150, image: ceaserImage },
        greekSalad: { price: 200, image: greekImage },
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
        <div className="salads-container">
            <Link to="/menu" className="btn-back">Back</Link>
            <h1 className="salads-heading">Salads</h1>
            <div className="salads-items-grid">
                {Object.entries(items).map(([item, { price, image }]) => (
                    <div key={item} className="salads-item">
                        <img src={image} alt={item} />
                        <h3>{item.replace(/([A-Z])/g, ' $1').trim()}</h3>
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

export default Salads;
