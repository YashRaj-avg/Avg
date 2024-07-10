// src/components/ProductCard.jsx
import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    // Handle adding the product to the cart (you can implement this logic as needed)
    console.log(`Added ${product.title} to cart`);
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: 400 }}
          height="140"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.primary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button onClick={handleAddToCart} variant="contained" color="primary" fullWidth>
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
