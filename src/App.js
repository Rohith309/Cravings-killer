import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import RiceItems from './pages/RiceItems';
import Breads from './pages/Breads';
import Salads from './pages/Salads';
import Desserts from './pages/Desserts';
import Cart from './pages/cart';
import CartButton from './pages/CartButton';
import Login from './pages/Login';
import Starters from './pages/starters'; 
import Curries from './pages/Curries'; 
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cartCounts, setCartCounts] = useState({
    pizza: 0,
    burger: 0,
    sushi: 0,
    biryani: 0,
    pulao: 0,
    friedRice: 0,
    naan: 0,
    roti: 0,
    caesarSalad: 0,
    greekSalad: 0,
    gulabJamun: 0,
    kheer: 0,
    rasgulla: 0,
    chickenLollipop: 0,
    gobiManchurian: 0,
    friedNoodles: 0,
    paneerButterMasala: 0,  
    chickenTikkaMasala: 0,
    kajuPaneer: 0
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const totalItems = Object.values(cartCounts).reduce((sum, count) => sum + count, 0);

  const handleQuantityChange = (item, newCount) => {
    setCartCounts(prevCounts => ({
      ...prevCounts,
      [item]: Math.max(newCount, 0)
    }));
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PageWithCartButton totalItems={totalItems}>
                <Home cartCounts={cartCounts} setCartCounts={setCartCounts} />
              </PageWithCartButton>
            </ProtectedRoute>
          } />
          <Route path="/menu" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PageWithCartButton totalItems={totalItems}>
                <Menu />
              </PageWithCartButton>
            </ProtectedRoute>
          } />
          <Route path="/rice" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PageWithCartButton totalItems={totalItems}>
                <RiceItems cartCounts={cartCounts} setCartCounts={setCartCounts} />
              </PageWithCartButton>
            </ProtectedRoute>
          } />
          <Route path="/breads" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PageWithCartButton totalItems={totalItems}>
                <Breads cartCounts={cartCounts} setCartCounts={setCartCounts} />
              </PageWithCartButton>
            </ProtectedRoute>
          } />
          <Route path="/salads" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PageWithCartButton totalItems={totalItems}>
                <Salads cartCounts={cartCounts} setCartCounts={setCartCounts} />
              </PageWithCartButton>
            </ProtectedRoute>
          } />
          <Route path="/desserts" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PageWithCartButton totalItems={totalItems}>
                <Desserts cartCounts={cartCounts} setCartCounts={setCartCounts} />
              </PageWithCartButton>
            </ProtectedRoute>
          } />
          <Route path="/starters" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PageWithCartButton totalItems={totalItems}>
                <Starters cartCounts={cartCounts} setCartCounts={setCartCounts} />
              </PageWithCartButton>
            </ProtectedRoute>
          } />
          <Route path="/curries" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PageWithCartButton totalItems={totalItems}>
                <Curries cartCounts={cartCounts} setCartCounts={setCartCounts} />
              </PageWithCartButton>
            </ProtectedRoute>
          } />
          <Route path="/cart" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PageWithCartButton totalItems={totalItems}>
                <Cart cartCounts={cartCounts} onQuantityChange={handleQuantityChange} />
              </PageWithCartButton>
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

function PageWithCartButton({ children, totalItems }) {
  const location = useLocation();
  const hideCartButton = location.pathname === '/login';

  return (
    <div>
      {!hideCartButton && <CartButton totalItems={totalItems} />}
      {children}
    </div>
  );
}

function ProtectedRoute({ isLoggedIn, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? children : null;
}

export default App;
