import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Starters.css'; // Ensure this points to the correct CSS
import Footer from './Footer'; // Ensure this path is correct
import chickenLollipopImage from '../images/chicken-lollipop.jpg'; // Update paths to your images
import gobiManchurianImage from '../images/gobi-manchurian.jpg';
import friedNoodlesImage from '../images/fried-noodles.jpg';

function Starters({ cartCounts, setCartCounts }) {
    const items = {
        chickenLollipop: { price: 250, image: chickenLollipopImage },
        gobiManchurian: { price: 180, image: gobiManchurianImage },
        friedNoodles: { price: 180, image: friedNoodlesImage },
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
        <div className="starters-container">
            <Link to="/menu" className="btn-back">Back</Link>
            <h1 className="starters-heading">Starters</h1>
            <div className="starters-items-grid">
                {Object.entries(items).map(([item, { price, image }]) => (
                    <div key={item} className="starters-item">
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

export default Starters;
