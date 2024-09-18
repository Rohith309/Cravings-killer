import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

function Cart({ cartCounts, onQuantityChange }) {
    const items = {
        pizza: 299,
        burger: 199,
        sushi: 399,
        biryani: 250,
        pulao: 200,
        friedRice: 180,
        naan: 50,
        roti: 30,
        caesarSalad: 150,
        greekSalad: 200,
        gulabJamun: 80,
        kheer: 100,
        rasgulla: 70,
        chickenLollipop: 250,
        gobiManchurian: 180,
        friedNoodles: 180,
        paneerButterMasala :300,
        chickenTikkaMasala :350,
        kajuPaneer : 320,
    };

    const totalPrice = Object.entries(cartCounts).reduce((total, [item, count]) => {
        return total + (items[item] || 0) * count;
    }, 0);

    const showBuyNowButton = Object.values(cartCounts).some(count => count > 0);

    return (
        <div className="cart-container">
            <h1 className="cart-heading">Your Cart</h1>
            <ul className="cart-items">
                {Object.entries(cartCounts).map(([item, count]) => count > 0 && (
                    <li key={item} className="cart-item">
                        <span className="item-name">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                        <div className="item-quantity">
                            <button
                                className="btn-quantity"
                                onClick={() => onQuantityChange(item, count - 1)}
                            >
                                -
                            </button>
                            <span className="quantity-display">{count}</span>
                            <button
                                className="btn-quantity"
                                onClick={() => onQuantityChange(item, count + 1)}
                            >
                                +
                            </button>
                        </div>
                        <span className="item-price">₹{items[item] * count}</span>
                    </li>
                ))}
            </ul>
            <div className="total-price">Total Price: ₹{totalPrice}</div>
            {showBuyNowButton && (
                <Link to="/checkout" className="cart-buy-now-button">
                    Buy Now
                </Link>
            )}
        </div>
    );
}

export default Cart;
