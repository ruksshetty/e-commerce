import React from 'react';
import { ShoppingCart, Search, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = ({ searchTerm, setSearchTerm, onCartClick }) => {
  const { getCartItemsCount } = useCart();
  const cartItemsCount = getCartItemsCount();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🌈 Kids Store</h1>
          <p>Amazing toys & more!</p>
        </div>
        
        <div className="search-bar">
          <div className="search-input-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search for toys, books, games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
        
        <div className="header-actions">
          <button className="action-btn wishlist-btn">
            <Heart size={24} />
            <span>Wishlist</span>
          </button>
          
          <button className="action-btn cart-btn" onClick={onCartClick}>
            <div className="cart-icon-container">
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
            </div>
            <span>Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;