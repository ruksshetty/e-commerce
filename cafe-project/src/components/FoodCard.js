import React from 'react';
import styled from 'styled-components';
import { Plus, Star } from 'lucide-react';

const Card = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const FoodImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #FF6B6B;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const FoodName = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  margin: 0 0 1rem 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: #8B4513;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const AddButton = styled.button`
  background: #8B4513;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;

  &:hover {
    background: #A0522D;
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    min-width: 36px;
    min-height: 36px;
    padding: 0.4rem;
  }
`;

const FoodCard = ({ item, onAddToCart }) => {
  return (
    <Card>
      <ImageContainer>
        <FoodImage src={item.image} alt={item.name} />
        {item.popular && (
          <PopularBadge>
            <Star size={12} fill="currentColor" />
            Popular
          </PopularBadge>
        )}
      </ImageContainer>
      <CardContent>
        <FoodName>{item.name}</FoodName>
        <Description>{item.description}</Description>
        <PriceContainer>
          <Price>${item.price.toFixed(2)}</Price>
          <AddButton onClick={() => onAddToCart(item)}>
            <Plus size={20} />
          </AddButton>
        </PriceContainer>
      </CardContent>
    </Card>
  );
};

export default FoodCard;