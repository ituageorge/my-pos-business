import * as React from "react";
import { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import RemoveDone from '@mui/icons-material/RemoveDone';
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";
import {
  CartItem,
  removeItem,
  updateQuantity,
} from "../redux/cartSlice/cartSlice";
// import { RemoveCircle } from "@mui/icons-material";

const CartItemCard = styled(Card)({
  maxWidth: 345,
  borderRadius: 5,
  margin: "2rem",
  border: "2px solid green",
  display: "inline-block",
});

export default function CartPage() {
  // const { product, quantity } = item;
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cartTotalForOneItem, setCartTotalForOneItem] = useState<number>(0);

  const removeProductFromCart = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleIncrease = (item: CartItem) => {
    dispatch(
      updateQuantity({
        productId: item.product.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item: CartItem, quantity: number) => {
    if (quantity > 1) {
      dispatch(
        updateQuantity({ productId: item.product.id, quantity: quantity - 1 })
      );
    }
  };

  React.useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  
  

  return (
    <>
    
      <Typography variant="h4" align="center" gutterBottom>
        Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h5" align="center">
          Your cart is empty.
        </Typography>
      ) : (
        <>
          {cartItems.map((item) => (
            <Grid item key={item.product.id} xs={12} sm={6} md={4}>
              <CartItemCard>
                <CardHeader title={item.product.name} />
                <CardMedia
                  component="img"
                  height="320"
                  image={item.product.image}
                  alt={item.product.alt}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.product.description}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Box
                    component="div"
                    m={1}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    minWidth="10rem"
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleDecrease(item, item.quantity)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>

                      <Typography
                        variant="h6"
                        color="text.secondary"
                        component="span"
                        sx={{ margin: "0 0.5rem" }}
                      >
                        {item.quantity}set
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleIncrease(item)}
                      >
                        <AddIcon />
                      </Button>
                    </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", fontSize:'1.2rem', fontWeight:'bold' }}>
                    <Typography variant="body1">
                      {item.product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}{" "}
                      x {item.quantity}{" "}
                    </Typography>
                    <Typography variant="body1">
                     ={" "} ${item.product.price * item.quantity}
                    </Typography>
                  </Box>
                  
                 {/* </Box> */}
                </CardContent>
                <CardContent>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ height: 40 }}
                    onClick={() => removeProductFromCart(item.product.id)}
                  >
                    Remove
                  </Button>
                </CardContent>
              </CartItemCard>
              <Link to="/home">
              <Box
                component="div"
                m={1}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minWidth: "10rem",
                  backgroundColor: "yellow",
                }}
              >
               Back to home page
              </Box>
              </Link>
            </Grid>
          ))}
           
          <Box display="flex" justifyContent="flex-end" m={2}>
            <Typography variant="h5">Total: ${cartTotal.toFixed(2)}</Typography>
          </Box>
          <Box display="flex" justifyContent="flex-start" m={2}>
          <Button
                    variant="contained"
                    color="primary"
                    sx={{ height: 60, width: '24rem' }}
                  
                  >
                pay
                  </Button>
          </Box>
        </>
      )}
     
    </>
  );
}
