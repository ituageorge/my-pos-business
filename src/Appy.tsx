import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ProductCards from "./pages/HomePage";
// import Items from "./pages/Items";
// import CartPage from "./pages/CartPage";
import Register from "./pages/Registration";
// import Login from "./pages/Login";
// import Customers from "./pages/Customers";
// import Receipts from "./pages/BillReceipt";
// import DebtorsPage from "./pages/DebtorsPage"
// import AdminPage from "./pages/AdminPage"
import ForgetPassword from "./pages/ForgetPassword"
import Reports from "./pages/Reports"
import Orders from "./pages/Orders"
// import CreditorsPage from "./pages/CreditorsPage"
import Invoices from "./pages/Invoices"
// import Payments from "./pages/Payments"
import ProductCategoriesType from "./pages/ProductCategoriesType"


// import DashboardPage from "./Appy"
import ErrorPage from "./pages/404Page";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./pages/Dashboard";
// import ResponsiveAppBar from './layout/Navbar';
import { Box, IconButton, Toolbar } from '@mui/material';
// const drawerWidth = 240;
// const drawerWidth = 0;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme,
  //  open
   }) => ({
  // flexGrow: 1,
  paddingLeft: '1rem', // default value for small screens
  transition: theme.transitions.create(['padding-left'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up('sm')]: {
    // apply this style for medium and larger screens
    // paddingLeft: open ? drawerWidth : '15rem',
  },
  [theme.breakpoints.up('md')]: {
    // apply this style for medium and larger screens
    // paddingLeft: open ? drawerWidth : '25rem',
  },
  [theme.breakpoints.up('lg')]: {
    // apply this style for large and larger screens
    // paddingLeft: open ? drawerWidth : '15rem',
  },
}));





function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
<BrowserRouter>
      <CssBaseline />
      {/* <ResponsiveAppBar /> */}
      <Box component="div" sx={{ backgroundColor: 'red', color: 'white' }}>
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      </Box>

      <Main
      //  open={open}
       >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start">
            {/* <MenuIcon /> */}
          </IconButton>
        </Toolbar>
        <Routes>
          {/* <Route path="/debt" element={<DebtorsPage />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/admin" element={<AdminPage />} /> */}
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/orders" element={<Orders />} />
          {/* <Route path="/creditors" element={<CreditorsPage />} /> */}
          <Route path="/invoices" element={<Invoices />} />
          {/* <Route path="/payments" element={<Payments />} /> */}
          <Route path="/productcategories" element={<ProductCategoriesType />} />
           <Route path="/errorpage" element={<ErrorPage />} />


          <Route path="/home" element={<ProductCards />} />
          {/* <Route path="/items" element={<Items />} /> */}
          {/* <Route path="/cart" element={<CartPage />} /> */}
          {/* <Route path="/receipt" element={<Receipts />} /> */}
          {/* <Route path="/customers" element={<Customers />} /> */}
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/appy" element={<DashboardPage/>} /> */}
        </Routes>
        
        </Main>
       
      </BrowserRouter>
  );
}

export default App;


// export function ProtectedRoute({children}){

//     if(localStorage.getItem('pos-user'))
//     {
//       return children
//     }
//     else{
//       return <Navigate to='/login' />
//     }

// }
