// import * as React from 'react';
// import { useState } from 'react';
// import { makeStyles } from '@mui/styles';
// import {
//   Box,
//   Button,
//   Card,
//   CardActionArea,
//   // CardActions,
//   CardContent,
//   CardMedia,
//   Grid,
//   Typography,
// } from '@mui/material';

// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   description: string;
//   alt: string;
//   price: number;
// }

// interface CartItem {
//   product: Product;
//   quantity: number;
// }

// interface CartItemPageProps {
//   cartItems: CartItem[];
// }

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     padding: '20px',
//   },
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 200,
//   },
// });

// export function CartItemPage(props: CartItemPageProps) {
//   const classes = useStyles();

//   const [totalPrice, setTotalPrice] = useState<number>(0);

//   const handleQuantityChange = (cartItem: CartItem, newQuantity: number) => {
//     const newCartItems = props.cartItems.map((item) =>
//       item.product.id === cartItem.product.id
//         ? { ...item, quantity: newQuantity }
//         : item
//     );
//     props.setCartItems(newCartItems);
//   };

//   const handleRemoveItem = (cartItem: CartItem) => {
//     const newCartItems = props.cartItems.filter(
//       (item) => item.product.id !== cartItem.product.id
//     );
//     props.setCartItems(newCartItems);
//   };

//   React.useEffect(() => {
//     const newTotalPrice = props.cartItems.reduce(
//       (acc, item) => acc + item.product.price * item.quantity,
//       0
//     );
//     setTotalPrice(newTotalPrice);
//   }, [props.cartItems]);

//   return (
//     <Box className={classes.root}>
//       <Typography variant="h4">Cart Items</Typography>
//       <Grid container spacing={2}>
//         {props.cartItems.map((cartItem) => (
//           <Grid item xs={12} key={cartItem.product.id}>
//             <Card className={classes.card}>
//               <CardActionArea>
//                 <CardMedia
//                   className={classes.media}
//                   image={cartItem.product.image}
//                   alt={cartItem.product.alt}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="h2">
//                     {cartItem.product.name}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="textSecondary"
//                     component="p"
//                   >
//                     {cartItem.product.description}
//                   </Typography>
//                   <Box mt={2}>
//                     <Typography variant="h6">${cartItem.product.price}</Typography>
//                     <Typography variant="subtitle1">Quantity:</Typography>
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       size="small"
//                       onClick={() => handleQuantityChange(cartItem, cartItem.quantity - 1)}
//                     >
//                       -
//                     </Button>
//                     <Box component="span" mx={1}>
//                       <Typography variant="subtitle1">{cartItem.quantity}</Typography>
//                     </Box>
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       size="small"
//                       onClick={() => handleQuantityChange(cartItem, cartItem.quantity + 1)}
//                     >
//                       +
//                     </Button>
//                   </Box>
//                 </CardContent> 
//               </CardActionArea>
//             </Card>
//           </Grid> 
//         ))} 
//       </Grid> 
//     </Box> 
//   )} 