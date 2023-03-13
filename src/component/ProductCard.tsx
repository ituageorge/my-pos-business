
import React from 'react';
import { Box, Card, CardHeader, CardMedia, CardContent, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface WiperProduct {
  id: number;
  name: string;
  image: string;
  description: string;
  alt: string;
}

const products: WiperProduct[] = [
  {
    id: 1,
    name: 'Spark plug',
    image: '/ngk_sparkplug.jpg',
    description: 'quality second-hand Spark plug.',
    alt:'Spark plug'
  },
  {
    id: 2,
    name: 'Spark plug',
    image: '/sparkplug_normal.jpg',
    description: 'quality second-hand Spark plug',
    alt:'spark plugs'
  },
  {
    id: 3,
    name: 'Engine Oil',
    image: '/engine oil.jpg',
    description: 'Engine oil.',
    alt:'Engine oil.'
  },
  {
    id: 4,
    name: 'Avalon Wiper Blades',
    image: '/avalonwiper.jpg',
    description: 'Many Avalon belts to pick buy.',
    alt:'Avalon belts'
  },
  {
    id: 5,
    name: 'Back Wiper Blades',
    image: '/backwipers.jpg',
    description: 'Many back wipers to buy from.',
    alt:'back wiper'
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


export default function WiperProductCards() {

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

{/* <ProductCardSelection image="/all_sparkplug.jpg" title="Product Title" price={10.99} /> */}
