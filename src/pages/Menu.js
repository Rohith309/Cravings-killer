import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import '../styles/FoodCategory.css'; // Ensure correct CSS file is imported
import biryani from '../images/biryani.jpg';
import Naan from '../images/naan.jpg';
import salad from '../images/greek-salad.jpg';
import desert from '../images/rasgulla.jpg';
import gobi from '../images/gobi-manchurian.jpg';
import chicken from '../images/chicken-tikka-masala.jpg';

function Menu() {
    const navigate = useNavigate(); 

    const handleBack = () => {
        navigate('/'); 
    };

    return (
        <div className="menu-container">
            <button onClick={handleBack} className="btn-back">Back</button>
            <h1 className="menu-heading">OUR MENU</h1>
            <div className="menu-items-grid">
                <div className="item-card">
                    <img src={gobi} alt="Starters" className="card-img-top" />
                    <div className="card-body text-center">
                        <h3 className="menu-card-title">Starters</h3>
                        <button className="btn-custom" onClick={() => navigate('/starters')}>View Items</button>
                    </div>
                </div>
                <div className="item-card">
                    <img src={biryani} alt="Rice Items" className="card-img-top" />
                    <div className="card-body text-center">
                        <h3 className="menu-card-title">Rice Items</h3>
                        <button className="btn-custom" onClick={() => navigate('/rice')}>View Items</button>
                    </div>
                </div>
                <div className="item-card">
                    <img src={chicken} alt="Curries" className="card-img-top" />
                    <div className="card-body text-center">
                        <h3 className="menu-card-title">Curries</h3>
                        <button className="btn-custom" onClick={() => navigate('/curries')}>View Items</button>
                    </div>
                </div>
                <div className="item-card">
                    <img src={Naan} alt="Breads" className="card-img-top" />
                    <div className="card-body text-center">
                        <h3 className="menu-card-title">Breads</h3>
                        <button className="btn-custom" onClick={() => navigate('/breads')}>View Items</button>
                    </div>
                </div>
                <div className="item-card">
                    <img src={salad} alt="Salads" className="card-img-top" />
                    <div className="card-body text-center">
                        <h3 className="menu-card-title">Salads</h3>
                        <button className="btn-custom" onClick={() => navigate('/salads')}>View Items</button>
                    </div>
                </div>
                <div className="item-card">
                    <img src={desert} alt="Desserts" className="card-img-top" />
                    <div className="card-body text-center">
                        <h3 className="menu-card-title">Desserts</h3>
                        <button className="btn-custom" onClick={() => navigate('/desserts')}>View Items</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Menu;
