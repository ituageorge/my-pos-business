import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const ProductDisplayPage = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a description for product 1',
      price: 10.99,
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is a description for product 2',
      price: 15.99,
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is a description for product 3',
      price: 20.99,
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="h6" color="text.primary">
                ${product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductDisplayPage;
