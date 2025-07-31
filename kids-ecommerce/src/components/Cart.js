import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    alert('🎉 Thank you for your order! This is a demo checkout.');
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>🛒 Shopping Cart</h2>
          <button className="close-cart" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={64} color="#ccc" />
              <h3>Your cart is empty</h3>
              <p>Add some amazing items to get started!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">${item.price}</p>
                      <p className="cart-item-age">👶 {item.age}</p>
                    </div>
                    
                    <div className="cart-item-controls">
                      <div className="quantity-controls">
                        <button
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <button
                        className="remove-item"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    <div className="cart-item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-summary">
                  <div className="cart-total">
                    <h3>Total: ${getCartTotal().toFixed(2)}</h3>
                  </div>
                  
                  <div className="cart-actions">
                    <button className="clear-cart-btn" onClick={clearCart}>
                      Clear Cart
                    </button>
                    <button className="checkout-btn" onClick={handleCheckout}>
                      🎉 Checkout
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;