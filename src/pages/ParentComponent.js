import React, { useState } from 'react';
import Cart from './cart';

function ParentComponent() {
    const [cartCounts, setCartCounts] = useState({
        pizza: 1,
        burger: 2,
        sushi: 0
    });

    const handleQuantityChange = (item, newCount) => {
        setCartCounts(prevCounts => ({
            ...prevCounts,
            [item]: Math.max(newCount, 0) // Ensure the count doesn't go below 0
        }));
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <Cart cartCounts={cartCounts} onQuantityChange={handleQuantityChange} />
        </div>
    );
}

export default ParentComponent;
