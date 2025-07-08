import React, { useState } from 'react';
import './HomePage.css';
import products from '../components/products';
import ProductList from '../components/ProductList';

// Extrae las categorías únicas de los productos
const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];

function HomePage() {
  // Estado para la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Filtra los productos según la categoría seleccionada
  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="homepage-container">
      <div className="logo-title">
        <img src='https://img.freepik.com/premium-vector/gaming-remote-controller-victor-illustration-mascot-logo-design_1146923-172.jpg?semt=ais_hybrid&w=740' alt="Gaming Logo" />
        <h1>Improve Gaming</h1>
      </div>
      {/* Botones para filtrar por categoría */}
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={category === selectedCategory ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Lista de productos filtrados */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default HomePage;