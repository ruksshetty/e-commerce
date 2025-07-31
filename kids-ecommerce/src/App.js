import React, { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { products } from './data/products';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <CartProvider>
      <div className="App">
        <Header 
          onCartClick={() => setIsCartOpen(true)}
          onSearchChange={setSearchTerm}
          searchTerm={searchTerm}
        />
        
        <main className="main-content">
          <div className="container">
            {/* Hero Section */}
            <section className="hero-section">
              <div className="hero-content">
                <h1 className="hero-title">
                  🌟 Welcome to KidsStore! 🌟
                </h1>
                <p className="hero-subtitle">
                  Discover amazing toys, books, and educational items that spark joy and creativity in every child!
                </p>
              </div>
            </section>

            {/* Category Filter */}
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            {/* Products Section */}
            <section className="products-section">
              <div className="products-header">
                <h2 className="section-title">
                  {selectedCategory === 'all' ? 'All Products' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Items`}
                </h2>
                <p className="products-count">
                  {filteredProducts.length} item{filteredProducts.length !== 1 ? 's' : ''} found
                </p>
              </div>

              <div className="products-grid">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <div className="no-products">
                    <div className="no-products-icon">🔍</div>
                    <h3>No products found</h3>
                    <p>Try adjusting your search or category filter</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>🌈 KidsStore</h3>
                <p>Making childhood magical with amazing products!</p>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#products">Products</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Categories</h4>
                <ul>
                  <li><a href="#toys">Toys</a></li>
                  <li><a href="#educational">Educational</a></li>
                  <li><a href="#books">Books</a></li>
                  <li><a href="#clothing">Clothing</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contact Info</h4>
                <p>📧 hello@kidsstore.com</p>
                <p>📞 1-800-KIDS-FUN</p>
                <p>🏠 123 Rainbow Street, Fun City</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 KidsStore. Making kids happy, one toy at a time! 🎈</p>
            </div>
          </div>
        </footer>

        {/* Shopping Cart */}
        <Cart 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </div>
    </CartProvider>
  );
}

export default App;
