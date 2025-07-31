import React from 'react';
import { Star, Plus, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onProductClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} fill="#FFD700" color="#FFD700" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" size={16} fill="#FFD700" color="#FFD700" style={{ opacity: 0.5 }} />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} color="#DDD" />);
    }

    return stars;
  };

  return (
    <div className="product-card" onClick={() => onProductClick(product)}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <button className="wishlist-heart">
          <Heart size={20} />
        </button>
        {product.inStock && (
          <span className="stock-badge">✅ In Stock</span>
        )}
      </div>
      
      <div className="product-info">
        <div className="product-category">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </div>
        
        <h3 className="product-name">{product.name}</h3>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-age">
          <span className="age-badge">👶 {product.age}</span>
        </div>
        
        <div className="product-rating">
          <div className="stars">
            {renderStars(product.rating)}
          </div>
          <span className="rating-text">({product.rating})</span>
        </div>
        
        <div className="product-footer">
          <div className="product-price">
            <span className="price">${product.price}</span>
          </div>
          
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <Plus size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;