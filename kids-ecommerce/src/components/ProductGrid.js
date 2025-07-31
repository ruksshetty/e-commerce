import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onProductClick }) => {
  if (products.length === 0) {
    return (
      <div className="no-products">
        <div className="no-products-content">
          <h3>🔍 No products found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-grid">
      <div className="products-header">
        <h2>🎪 Amazing Products ({products.length})</h2>
        <p>Discover wonderful items for kids of all ages!</p>
      </div>
      
      <div className="products-container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;