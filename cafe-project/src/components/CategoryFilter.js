import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#8B4513' : 'white'};
  color: ${props => props.active ? 'white' : '#8B4513'};
  border: 2px solid #8B4513;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.9rem;

  &:hover {
    background: ${props => props.active ? '#A0522D' : '#8B4513'};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
  }
`;

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <FilterContainer>
      {categories.map((category) => (
        <FilterButton
          key={category}
          active={activeCategory === category}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default CategoryFilter;