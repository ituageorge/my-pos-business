// import * as React from "react";
// import { useState } from "react";
// import {
//   Box,
//   Card,
//   CardHeader,
//   CardMedia,
//   CardContent,
//   Typography,
//   Grid,
//   CardActions,
//   IconButton,
// } from "@mui/material";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import { useAppDispatch, useAppSelector } from "../redux/hooks";
// import { addProduct, removeProduct } from "../redux/productSlice/productsSlice";
// import { Link } from "react-router-dom";
// import { removeItem, updateQuantity } from "../redux/cartSlice/cartSlice";

// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   description: string;
//   alt: string;
// }

// interface CartItem {
//   product: Product;
//   quantity: number;
// }

// const CartItemCard = styled(Card)({
//   maxWidth: 345,
//   borderRadius: 5,
//   margin: "2rem",
//   border: "2px solid green",
//   display: "inline-block",
// });

// export default function CartPage() {
//   const dispatch = useAppDispatch();
//   const cartItems = useAppSelector((state) => state.cart.items);
//   const [cartTotal, setCartTotal] = useState<number>(0);

//   const removeProductFromCart = (id: number) => {
//     dispatch(removeItem(id));
//   };

//   const handleIncrease = (item: CartItem) => {
//     dispatch(updateQuantity({ productId: item.product.id, quantity: item.quantity + 1 }));
//   };

//   const handleDecrease = (item: CartItem) => {
//     if (item.quantity > 1) {
//       dispatch(updateQuantity({ productId: item.product.id, quantity: item.quantity - 1 }));
//     }
//   };

//   React.useEffect(() => {
//     const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
//     setCartTotal(total);
//   }, [cartItems]);

//   return (
//     <>
//       <Typography variant="h4" align="center" gutterBottom>
//         Cart
//       </Typography>

//       {cartItems.length === 0 ? (
//         <Typography variant="h5" align="center">
//           Your cart is empty.
//         </Typography>
//       ) : (
//         <>
//           {cartItems.map((item) => {
//             const { id, name, image, alt } = item.product;
//             return (
//               <Grid item key={id} xs={12} sm={6} md={4}>
//                 <CartItemCard>
//                   <CardHeader title={name} />
//                   <CardMedia
//                     component="img"
//                     height="320"
//                     image={image}
//                     alt={alt}
//                   />
//                   <CardContent>
//                     <Typography variant="body2" color="text.secondary">
//                       {item.product.description}
//                      </Typography>
//                 <Typography variant="body1">
//                   {item.product.price.toLocaleString("en-US", {
//                     style: "currency",
//                     currency: "USD",
//                   })}{" "}
//                   x {item.quantity}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button
//                   size="small"
//                   color="secondary"
//                   onClick={() => removeProductFromCart(id)}
//                 >
//                   Remove
//                 </Button>
//                 <div>
//                   <IconButton
//                     size="small"
//                     onClick={() => handleDecrease(item)}
//                   >
//                     <RemoveIcon />
//                   </IconButton>
//                   <Typography component="span">{item.quantity}</Typography>
//                   <IconButton
//                     size="small"
//                     onClick={() => handleIncrease(item)}
//                   >
//                     <AddIcon />
//                   </IconButton>
//                 </div>
//               </CardActions>
//             </CartItemCard>
//           </Grid>
//         );
//       })}
//       <Grid item xs={12}>
//         <Typography variant="h5" align="right" gutterBottom>
//           Total:{" "}
//           {cartTotal.toLocaleString("en-US", {
//             style: "currency",
//             currency: "USD",
//           })}
//         </Typography>
//       </Grid>
//       <Grid item xs={12}>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           onClick={() => alert("TODO: Implement checkout functionality!")}
//         >
//           Checkout
//         </Button>
//       </Grid>
//     </>
//   )}
// </>
// );
// }
