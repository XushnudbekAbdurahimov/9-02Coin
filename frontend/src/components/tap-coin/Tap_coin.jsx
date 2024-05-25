import React, { useState, useEffect } from 'react';
import './Tap_coin.css';
import logo from '../pictures/logo.jpg';

const Tap_coin = () => {
  const [coinCount, setCoinCount] = useState(() => {
    // Initialize state with value from localStorage or default to 0
    const savedCount = localStorage.getItem('coinCount');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    // Update localStorage whenever coinCount changes
    localStorage.setItem('coinCount', coinCount);
  }, [coinCount]);

  const incrementCoinCount = () => {
    setCoinCount(prevCount => prevCount + 1);
  };

  return (
    <div className='tap_coin'>
      <div className="main-part">
        <div className="coin-navbar">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="nav_title">
            9-02 COIN
          </h1>
        </div>
        <div className="count">
          <div className="coin-count">
            <p className='count-number'>{coinCount}</p>
          </div>
          <div className="coin-part">
            <button onClick={incrementCoinCount}>9-02</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tap_coin;
