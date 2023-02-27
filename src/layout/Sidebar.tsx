import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  BarChart as BarChartIcon,
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    minWidth: "14rem",
    transition: "max-width 0.2s ease-in-out",
    backgroundColor: "#C0C0C0",
    marginTop: "4rem",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "10rem",
    },
  },
}));


interface SidebarProps {
  open : boolean;
  handleDrawerClose: () => void;
  // other props here
}

// const Sidebar = (): JSX.Element => {
const Sidebar:React.FC<SidebarProps> = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const handleMenuOpen = (): void => {
    setOpen(true);
  };

  const handleMenuClose = (): void => {
    setOpen(false);
  };

  interface ListItemLinkProps {
    icon?: JSX.Element;
    primary: string;
    to: string;
  }


  const ListItemLink = ({ icon, primary, to }: ListItemLinkProps): JSX.Element => {
    const Link = React.useMemo(() => {
      return (props: any) => <RouterLink to={to} {...props} />;
    }, [to]);
  
    return (
      <li>
        <ListItemButton component={Link}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItemButton>
      </li>
    );
  };
  

  return (
    <>
      {isMobile ? (
        <>
          <Box sx={{ marginTop: 9 }}>
            <IconButton
              sx={{
                marginInline: 2,
                backgroundColor: "orange",
                color: "white",
                position: "fixed",
              }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Drawer anchor="left" open={open} onClose={handleMenuClose}>
            <List>
              <ListItem>
                <ListItemButton onClick={handleMenuClose}>
                  <ListItemIcon>
                    <MenuIcon />
                  </ListItemIcon>
                  <ListItemText primary="Go Back" />
                </ListItemButton>
              </ListItem>

              <ListItemLink to="/dashboard" primary="Dashboard" icon={<DashboardIcon />} />

              <ListItemLink to="/orders" primary="Orders" icon={<ShoppingCartIcon />} />

              <ListItemLink to="/home" primary="HomePage" icon={<PeopleIcon />} />

              <ListItemLink to="/reports" primary="Reports" icon={<BarChartIcon />} />
            </List>
          </Drawer>
        </>
      ) : (
        <>
          <StyledDrawer variant="permanent" anchor="left">
            <Toolbar />
            <List>
              <ListItemLink to="/dashboard" primary="Dashboard" icon={<DashboardIcon />} />

              <ListItemLink to="/orders" primary="Orders" icon={<ShoppingCartIcon />} />

              <ListItemLink to="/home" primary="HomePage" icon={<PeopleIcon />} />

              <ListItemLink to="/reports" primary="Reports" icon={<BarChartIcon />} />
            </List>
          </StyledDrawer>
        </>
      )}
      </>
    );
  };
  
  export default Sidebar;
