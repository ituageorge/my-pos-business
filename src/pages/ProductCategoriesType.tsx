import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

function ProductCategoryPage() {
  const products = [
    {
      name: 'Product 1',
      image: 'https://picsum.photos/300/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Product 2',
      image: 'https://picsum.photos/300/200',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Product 3',
      image: 'https://picsum.photos/300/200',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      name: 'Product 4',
      image: 'https://picsum.photos/300/200',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  return (
    <Grid container spacing={3}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              height="200"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductCategoryPage;
