import React from 'react';
import styled from 'styled-components';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
`;

const CartPanel = styled.div`
  background: white;
  width: 400px;
  height: 100vh;
  overflow-y: auto;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (max-width: 480px) {
    width: 100vw;
  }
`;

const CartHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #8B4513;
  color: white;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const CartContent = styled.div`
  padding: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: #333;
`;

const ItemPrice = styled.span`
  color: #8B4513;
  font-weight: bold;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled.button`
  background: #f0f0f0;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }
`;

const Quantity = styled.span`
  font-weight: bold;
  min-width: 20px;
  text-align: center;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #666;
`;

const CartSummary = styled.div`
  padding: 1.5rem;
  border-top: 2px solid #eee;
  background: #f9f9f9;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const CheckoutButton = styled.button`
  width: 100%;
  background: #8B4513;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #A0522D;
  }
`;

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    alert('Thank you for your order! Your delicious items will be ready soon.');
    // In a real app, this would handle the checkout process
  };

  return (
    <CartOverlay onClick={onClose}>
      <CartPanel onClick={(e) => e.stopPropagation()}>
        <CartHeader>
          <h2>Your Order</h2>
          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
        </CartHeader>
        
        <CartContent>
          {cartItems.length === 0 ? (
            <EmptyCart>
              <ShoppingBag size={48} color="#ccc" />
              <h3>Your cart is empty</h3>
              <p>Add some delicious items to get started!</p>
            </EmptyCart>
          ) : (
            cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                </ItemDetails>
                <QuantityControls>
                  <QuantityButton onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                    <Minus size={16} />
                  </QuantityButton>
                  <Quantity>{item.quantity}</Quantity>
                  <QuantityButton onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                    <Plus size={16} />
                  </QuantityButton>
                </QuantityControls>
              </CartItem>
            ))
          )}
        </CartContent>

        {cartItems.length > 0 && (
          <CartSummary>
            <TotalRow>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </TotalRow>
            <CheckoutButton onClick={handleCheckout}>
              <ShoppingBag size={20} />
              Checkout
            </CheckoutButton>
          </CartSummary>
        )}
      </CartPanel>
    </CartOverlay>
  );
};

export default Cart;