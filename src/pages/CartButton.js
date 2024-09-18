// src/pages/CartButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartButton.css';

function CartButton({ totalItems }) {
    return (
        <Link to="/cart" className="cart-button">
            <i className="fas fa-shopping-cart"></i>
            {totalItems > 0 && <div className="cart-badge">{totalItems}</div>}
        </Link>
    );
}

export default CartButton;
