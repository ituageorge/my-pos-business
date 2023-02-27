// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { Paper, Typography } from '@mui/material';


// function Receipt({ items, total }) {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Item</TableCell>
//             <TableCell align="right">Price</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {items.map((item, index) => (
//             <TableRow key={index}>
//               <TableCell component="th" scope="row">
//                 {item.name}
//               </TableCell>
//               <TableCell align="right">${item.price.toFixed(2)}</TableCell>
//             </TableRow>
//           ))}
//           <TableRow>
//             <TableCell><Typography variant="h6">Total</Typography></TableCell>
//             <TableCell align="right"><Typography variant="h6">${total.toFixed(2)}</Typography></TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default Receipt;
