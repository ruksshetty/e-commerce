import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < Math.floor(rating) ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x400/ff6b6b/ffffff?text=Kids+Item';
          }}
        />
        <div className="product-overlay">
          <button className="quick-view-btn">Quick View</button>
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-age">Age: {product.age}</div>
        
        <div className="product-rating">
          <div className="stars">
            {renderStars(product.rating)}
          </div>
          <span className="rating-value">({product.rating})</span>
        </div>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <div className="product-price">${product.price}</div>
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart size={18} />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;