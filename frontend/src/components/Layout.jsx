import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Drawer, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import UserInformation from './UserInformation';
import Loader from './Loader';

// Styled button for authentication actions
const AuthButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  textTransform: 'none',
  borderRadius: '8px',
  margin: '0 10px',
  '&:hover': {
    color: '#f5f5f5',
    backgroundColor: '#c62828',
  },
}));

/**
 * Layout component serves as the main layout wrapper for the application.
 * It includes a navigation bar, a responsive drawer for user login/registration, and a placeholder for nested routes.
 * Displays a loading spinner while data is being loaded.
 *
 * @returns {JSX.Element} The rendered Layout component.
 */
const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setIsLoading(false); // Simulates loading completion
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen); // Toggle drawer open state
  };

  const closeDrawerAfterDelay = () => {
    setTimeout(() => {
      setDrawerOpen(false); // Automatically close the drawer after 2 seconds
    }, 2000);
  };

  return (
    <div>
      {isLoading ? (
        <Loader /> // Show loading spinner if data is being loaded
      ) : (
        <>
          {/* Navigation Bar */}
          <AppBar 
            position="fixed" 
            sx={{ 
              backgroundColor: '#d32f2f', 
              top: 0, 
              zIndex: (theme) => theme.zIndex.drawer + 1 
            }}
          >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AuthButton
                  onClick={toggleDrawer}
                  startIcon={<AccountCircleIcon />}
                >
                  Login / Register
                </AuthButton>
              </Box>
              <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
                {/* Navigation Links */}
                <Button
                  component={NavLink}
                  to="/"
                  sx={({ isActive }) => ({
                    color: isActive ? '#f5f5f5' : '#ffffff',
                    margin: '0 10px',
                    textTransform: 'none',
                    '&:hover': {
                      color: '#f5f5f5',
                    },
                  })}
                >
                  Home
                </Button>
                <Button
                  component={NavLink}
                  to="/ShippingPolicy"
                  sx={({ isActive }) => ({
                    color: isActive ? '#f5f5f5' : '#ffffff',
                    margin: '0 10px',
                    textTransform: 'none',
                    '&:hover': {
                      color: '#f5f5f5',
                    },
                  })}
                >
                  Shipping Policy
                </Button>
                <Button
                  component={NavLink}
                  to="/about"
                  sx={({ isActive }) => ({
                    color: isActive ? '#f5f5f5' : '#ffffff',
                    margin: '0 10px',
                    textTransform: 'none',
                    '&:hover': {
                      color: '#f5f5f5',
                    },
                  })}
                >
                  About Us
                </Button>
                <Button
                  component={NavLink}
                  to="/ContactUs"
                  sx={({ isActive }) => ({
                    color: isActive ? '#f5f5f5' : '#ffffff',
                    margin: '0 10px',
                    textTransform: 'none',
                    '&:hover': {
                      color: '#f5f5f5',
                    },
                  })}
                >
                  Contact Us
                </Button>
                <Button
                  component={NavLink}
                  to="/Terms"
                  sx={({ isActive }) => ({
                    color: isActive ? '#f5f5f5' : '#ffffff',
                    margin: '0 10px',
                    textTransform: 'none',
                    '&:hover': {
                      color: '#f5f5f5',
                    },
                  })}
                >
                  Terms and Conditions
                </Button>
                <Button
                  component={NavLink}
                  to="/ShoppingCart"
                  sx={({ isActive }) => ({
                    color: isActive ? '#f5f5f5' : '#ffffff',
                    margin: '0 10px',
                    textTransform: 'none',
                    '&:hover': {
                      color: '#f5f5f5',
                    },
                  })}
                >
                  Shopping Cart
                </Button>
                <Button
                  component={NavLink}
                  to="/OrdersList"
                  sx={({ isActive }) => ({
                    color: isActive ? '#f5f5f5' : '#ffffff',
                    margin: '0 10px',
                    textTransform: 'none',
                    '&:hover': {
                      color: '#f5f5f5',
                    },
                  })}
                >
                  Orders
                </Button>
              </Box>
              <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img 
                  src="/assets/logo.jpg" 
                  alt="logo" 
                  style={{ width: '120px', marginLeft: 'auto' }} 
                />
              </NavLink>
            </Toolbar>
          </AppBar>
          
          {/* Drawer for Login / Registration */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer}
            sx={{ width: 250, flexShrink: 0 }}
          >
            <Box sx={{ width: 400, padding: 2 }}>
              <IconButton onClick={toggleDrawer} sx={{ marginBottom: 2 }}>
                <CloseIcon />
              </IconButton>
              <UserInformation closeDrawerAfterDelay={closeDrawerAfterDelay} />
            </Box>
          </Drawer>

          {/* Outlet for nested routes */}
          <Box sx={{ marginTop: '64px' }}>
            <Outlet />
          </Box>
        </>
      )}
    </div>
  );
};

export default Layout;
