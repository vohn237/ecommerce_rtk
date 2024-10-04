import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './SuperCoin.css';

const SuperCoin = () => {
  const [superCoins, setSuperCoins] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    const calculateSuperCoins = () => {
      if (totalAmount >= 100) {
        setSuperCoins(Math.min(Math.floor(totalAmount / 100) * 10, 30));
      } else {
        setSuperCoins(0);
      }
    };

    calculateSuperCoins();
  }, [totalAmount]);

  return (
    <div className="super-coin">
      <h2>SuperCoin</h2>
      <p>You have earned {superCoins} SuperCoins</p>
    </div>
  );
};

export default SuperCoin;
