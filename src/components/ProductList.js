import React from 'react';
import Grid from '@mui/material/Grid';

// Funcion para mostrar la lista de productos
function ProductList({ products }) {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-title">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <span className="product-price">${product.price.toFixed(2)}</span>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
