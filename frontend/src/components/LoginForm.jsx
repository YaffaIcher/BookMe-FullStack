import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getUser } from '../services/usersService';
import { setUser } from '../states/userSlice';

/**
 * LoginForm component provides a login interface for users.
 * It allows users to enter their username and password, and handles authentication.
 * On successful login, it dispatches user data to the Redux store and closes the drawer.
 * Displays success or error messages based on the login outcome.
 *
 * @param {Function} onSwitch - Callback function to switch to the account creation form.
 * @param {Function} closeDrawerAfterDelay - Function to close the drawer after a delay.
 * @returns {JSX.Element} The rendered LoginForm component.
 */
const LoginForm = ({ onSwitch, closeDrawerAfterDelay }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  const dispatch = useDispatch();

  /**
   * Handles form submission, performs user authentication, and manages success/error states.
   * Closes the drawer after a delay on successful login.
   *
   * @param {React.FormEvent} event - The form submit event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await getUser(userName);

      if (response.status !== 200) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const user = response.data;

      if (user && user.password === password) {
        dispatch(setUser({ id: user.userId, ...user }));
        setSuccess('Login successful!');
        setError(null);
        
        // Close the Drawer after 2 seconds
        closeDrawerAfterDelay();
      } else {
        setError('Incorrect username or password');
        setSuccess(null);
      }
    } catch (error) {
      setError('Login error');
      setSuccess(null);
      console.error('Error during login:', error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography component="h1" variant="h5" align="center">
          Log in to your account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User name"
            name="userName"
            autoComplete="username"
            autoFocus
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={onSwitch}
          >
            Create a New Account
          </Button>
          {success && <Typography variant="h6" style={{ color: 'green', marginTop: '20px' }}>{success}</Typography>}
          {error && <Typography variant="h6" style={{ color: 'red', marginTop: '20px' }}>{error}</Typography>}
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginForm;
