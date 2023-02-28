
import React from 'react';
import { Box, Card, CardHeader, CardMedia, CardContent, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  alt: string;
}

const products: Product[] = [
  {
    id: 1,
    name: ' Wiper Blades',
    image: '/images.jpg',
    description: 'quality wiper blades for all .',
    alt:'Wiper Blades'
  },
  {
    id: 2,
    name: 'Car Spark plug',
    image: '/all_sparkplug.jpg',
    description: 'Good plugs for your vehicle .',
    alt:'spark plugs'
  },
  {
    id: 3,
    name: 'fanbelts',
    image: '/fan belt.jpg',
    description: 'Many fan belts to pick from.',
    alt:'fan belts'
  },
  // add more products here
]


const ProductCard = styled(Card)({
  maxWidth: 345,
  borderRadius: 5,
  margin:'2rem',
  border: '2px solid green',
  display: "inline-block"
});


export default function ProductCards() {

  return (
    <Box component="div"
    maxWidth='24rem'
      m={1}
      display='inline'
      alignItems="center"
      >
      {products && products.map((product) => (
        <ProductCard key={product.id}>
          <CardHeader
            title={`Select ${product.name} here`}
          />
          <CardMedia
            component="img"
            image={product.image}
            alt={product.alt}
          />
          <CardContent>
            <Typography variant="body2" color="secondary">
              {product.description}
            </Typography>
          </CardContent>
         
            <CardContent>
               <Box
                component="div"
                m={1}
                display="flex"
                justifyContent="left"
                minWidth='10rem'
              >
                  
                <Button variant="contained" color="primary" sx={{ height: 40, maxWidth:'16rem' }}>
               select {product.name}
                </Button>
               
              </Box>
            </CardContent>

        </ProductCard>
      ))}
    </Box>
  );
}
