import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Footer from './Footer';
import Pizza from '../images/pizza.jpg';
import burger from '../images/burger.jpg';
import sushi from '../images/sushi.jpg';

function Home({ cartCounts, setCartCounts }) {
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
        <div className="home-container">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Our Restaurant</h1>
                    <p>Enjoy the best food in town</p>
                    <Link to="/menu" className="btn-primary-home">Explore Menu</Link>
                </div>
            </div>
            <div className="restaurant-description">
                <p>Our restaurant offers a wide range of delicious dishes made with the freshest ingredients. Explore our menu to find your favorites and enjoy a memorable dining experience.</p>
            </div>
            <div className="explore-menu">
                <h2>Explore Our Menu</h2>
                <div className="navigation-buttons">
                    <Link to="/starters" className="btn-nav">Starters</Link> 
                    <Link to="/rice" className="btn-nav">Rice Items</Link>
                    <Link to="/curries" className="btn-nav">Curries</Link>
                    <Link to="/breads" className="btn-nav">Breads</Link>
                    <Link to="/salads" className="btn-nav">Salads</Link>
                    <Link to="/desserts" className="btn-nav">Desserts</Link>
                </div>
            </div>
            <div className="featured-section">
                <h2>Featured Items</h2>
                <div className="featured-items">
                    {/* Pizza */}
                    <div className="featured-item">
                        <img src={Pizza} alt="Pizza" />
                        <h3>Pizza</h3>
                        <p className="card-description">Delicious cheese and tomato pizza with fresh ingredients.</p>
                        <p className="card-price">₹299</p>
                        <div className="cart-controls">
                            <button className="btn-quantity" onClick={() => handleRemoveFromCart('pizza')}>-</button>
                            <span className="quantity-display">{cartCounts.pizza}</span>
                            <button className="btn-quantity" onClick={() => handleAddToCart('pizza')}>+</button>
                            {cartCounts.pizza > 0 && <Link to="/buy" className="btn-buy-now">Buy Now</Link>}
                        </div>
                    </div>

                    {/* Burger */}
                    <div className="featured-item">
                        <img src={burger} alt="Burger" />
                        <h3>Burger</h3>
                        <p className="card-description">Juicy chicken burger with lettuce, tomato, and cheese.</p>
                        <p className="card-price">₹199</p>
                        <div className="cart-controls">
                            <button className="btn-quantity" onClick={() => handleRemoveFromCart('burger')}>-</button>
                            <span className="quantity-display">{cartCounts.burger}</span>
                            <button className="btn-quantity" onClick={() => handleAddToCart('burger')}>+</button>
                            {cartCounts.burger > 0 && <Link to="/buy" className="btn-buy-now">Buy Now</Link>}
                        </div>
                    </div>

                    {/* Sushi */}
                    <div className="featured-item">
                        <img src={sushi} alt="Sushi" />
                        <h3>Sushi</h3>
                        <p className="card-description">Fresh sushi rolls with a variety of fillings.</p>
                        <p className="card-price">₹399</p>
                        <div className="cart-controls">
                            <button className="btn-quantity" onClick={() => handleRemoveFromCart('sushi')}>-</button>
                            <span className="quantity-display">{cartCounts.sushi}</span>
                            <button className="btn-quantity" onClick={() => handleAddToCart('sushi')}>+</button>
                            {cartCounts.sushi > 0 && <Link to="/buy" className="btn-buy-now">Buy Now</Link>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
