import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const pages = ['Products', 'Pricing'];
const settings = ['Profile', 'Logout'];

interface ResponsiveAppBarProps {
  handleDrawerOpen: () => void;
};


const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = () => {

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenUserMenu = (event: { currentTarget: React.SetStateAction<HTMLElement | null>; }) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{width:'100vw'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       
          {isMobile ? (
            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              My business
            </Typography>
          ) : (
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 1,
                display: { xs: 'none', md: 'block' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              My pos business
            </Typography>
          )}

<Box sx={{ flexGrow: 1, flexDirection: 'row' }}>
  
      {pages.map((page) => (
        <Button key={page} color="inherit" sx={{ textTransform: 'none' }}>
          {page}
        </Button>
      ))}
    
</Box> 


<Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

    </Toolbar>
  </Container>
</AppBar>
  )}

  export default ResponsiveAppBar
  