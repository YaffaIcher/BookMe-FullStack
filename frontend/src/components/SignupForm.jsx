import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createUser } from '../services/usersService';
import { setUser } from '../states/userSlice';

/**
 * SignupForm component allows users to create a new account.
 * Handles user input, form submission, and displays success or error messages.
 *
 * @param {Function} onSwitch - Function to call when switching to a different form (e.g., login).
 * @param {Function} closeDrawerAfterDelay - Function to close the drawer after a delay.
 * @returns {JSX.Element} The rendered SignupForm component.
 */
const SignupForm = ({ onSwitch, closeDrawerAfterDelay }) => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const dispatch = useDispatch();

  /**
   * Handles form submission for user signup.
   * Validates passwords, creates a user, and updates the Redux store.
   * Displays success or error messages based on the result.
   *
   * @param {Object} event - The form submission event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setSuccess(null);
      return;
    }

    try {
      const userDto = { 
        FullName: fullName, 
        UserName: userName, 
        Email: email, 
        Password: password 
      };

      const response = await createUser(userDto);
      dispatch(setUser({ id: response.userId, ...response }));
      setSuccess('Signup successful!');
      setError(null);

      // Close the drawer after 2 seconds
      closeDrawerAfterDelay();
    } catch (error) {
      setError('Signup error');
      setSuccess(null);
      console.error('Error during signup:', error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography component="h1" variant="h5" align="center">
          Create a New Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User name"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={onSwitch}
          >
            Already have an account
          </Button>
          {success && <Typography variant="h6" style={{ color: 'green', marginTop: '20px' }}>{success}</Typography>}
          {error && <Typography variant="h6" style={{ color: 'red', marginTop: '20px' }}>{error}</Typography>}
        </Box>
      </Paper>
    </Container>
  );
};

export default SignupForm;
