import React from 'react';
import { X, Star, Plus, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    // Show a brief success message
    const button = document.querySelector('.modal-add-to-cart');
    const originalText = button.textContent;
    button.textContent = '✅ Added!';
    button.style.backgroundColor = '#4CAF50';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '';
    }, 2000);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={20} fill="#FFD700" color="#FFD700" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" size={20} fill="#FFD700" color="#FFD700" style={{ opacity: 0.5 }} />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={20} color="#DDD" />);
    }

    return stars;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-body">
          <div className="modal-image-section">
            <img src={product.image} alt={product.name} className="modal-image" />
            <button className="modal-wishlist">
              <Heart size={24} />
              Add to Wishlist
            </button>
          </div>
          
          <div className="modal-details">
            <div className="modal-category">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </div>
            
            <h2 className="modal-title">{product.name}</h2>
            
            <div className="modal-rating">
              <div className="stars">
                {renderStars(product.rating)}
              </div>
              <span className="rating-text">({product.rating}) ⭐</span>
            </div>
            
            <div className="modal-price">
              <span className="price">${product.price}</span>
              {product.inStock && <span className="stock-status">✅ In Stock</span>}
            </div>
            
            <div className="modal-age">
              <strong>👶 Recommended Age:</strong> {product.age}
            </div>
            
            <div className="modal-description">
              <h4>📝 Description</h4>
              <p>{product.description}</p>
            </div>
            
            <div className="modal-features">
              <h4>✨ Features</h4>
              <ul>
                <li>🎯 Safe and non-toxic materials</li>
                <li>🌟 Educational and fun</li>
                <li>🎁 Perfect for gifts</li>
                <li>📦 Fast shipping available</li>
              </ul>
            </div>
            
            <div className="modal-actions">
              <button 
                className="modal-add-to-cart"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <Plus size={20} />
                Add to Cart - ${product.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;