import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ProductCards from "./pages/HomePage";
import Register from "./pages/Registration";
import ForgetPassword from "./pages/ForgetPassword";
import Reports from "./pages/Reports";
import Orders from "./pages/Orders";
import Invoices from "./pages/Invoices";
import ProductCategoriesType from "./pages/ProductCategoriesType";
import ErrorPage from "./pages/404Page";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import ResponsiveAppBar from "./layout/Navbar";
import { Box, IconButton, Toolbar } from "@mui/material";
import ProductCardSelection from "./component/ProductCard";
import CartPage from "./pages/CartPage";
// import { CartPage } from "./pages/CartPage";


const drawerWidth = 240;

interface MainProps {
  open: boolean;
}


const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<MainProps>(({ theme, open }) => ({
  paddingLeft: "1rem",
  transition: theme.transitions.create(["padding-left"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up("sm")]: {
    paddingLeft: open ? drawerWidth : "15rem",
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: open ? drawerWidth : "25rem",
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: open ? drawerWidth : "15rem",
  },
}));

const App: React.FC =() => {
  const [open, setOpen] = useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const handleDrawerClose = ()=> {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  

  return (
    <BrowserRouter>
      <CssBaseline />
      <ResponsiveAppBar handleDrawerOpen={handleDrawerOpen} />
      <Box component="div" sx={{ backgroundColor: "red", color: "white" }}>
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      </Box>

      <Main open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            {/* <MenuIcon /> */}
          </IconButton>
        </Toolbar>


        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/productcategories" element={<ProductCategoriesType />} />
          <Route path="/errorpage" element={<ErrorPage />} />

          <Route path="/home" element={<ProductCards />} />
        
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<ProductCardSelection />} />


          {/* Uncomment the following routes when implementing corresponding pages */}
          <Route path="/cart" element={<CartPage />} />
          
          {/* <Route path="/cart" component={() => <CartPage cartItems={[]} />} /> */}

          {/* <Route path="/receipt" element={<Receipts />} /> */}
          {/* <Route path="/customers" element={<Customers />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/debt" element={<DebtorsPage />} /> */}
          {/* <Route path="/creditors" element={<CreditorsPage />} /> */}
          {/* <Route path="/payments" element={<Payments />} /> */}
          {/* <Route path="/admin" element={<AdminPage />} /> */}
          </Routes>
      </Main>
    </BrowserRouter>
  );
}
export default App;

// export function ProtectedRoute({ children }) {
//   if (localStorage.getItem("pos-user")) {
//     return children;
//   } else {
//     return <Navigate to="/login" />;
//   }
// }
