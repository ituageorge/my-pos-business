import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link, } from "react-router-dom";
import { addCartItem } from "../redux/cartSlice/cartSlice";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  alt: string;
  price: number;
  quantity: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const ProductCard = styled(Card)({
  maxWidth: 345,
  borderRadius: 5,
  margin: "2rem",
  border: "2px solid green",
  display: "inline-block",
});

export default function ProductCards() {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  // const history = useHistory();

  const addProductToCart = (product: Product) => {
    const cartItem: CartItem = {
      product: product,
      quantity: 1,
    };
    dispatch(addCartItem(cartItem));
  };

  return (
    <Grid container spacing={2}>
      {products &&
        products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard key={product.id}>
              <CardHeader title={`Select ${product.name} here`} />
              <CardMedia
                component="img"
                height="320"
                image={product.image}
                alt={product.alt}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardContent>
                <Box
                  component="div"
                  m={1}
                  display="flex"
                  justifyContent="left"
                  minWidth="10rem"
                >
                   <Link to="/cart">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ height: 40, maxWidth: "16rem" }}
                    onClick={() => addProductToCart(product)}
                  >
                    Add to cart
                  </Button>
                  </Link>
                </Box>
              </CardContent>
            </ProductCard>
          </Grid>
        ))}
       
    </Grid>
  );
}
