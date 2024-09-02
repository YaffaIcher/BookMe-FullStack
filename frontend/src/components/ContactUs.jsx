import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Snackbar, Alert, Button } from '@mui/material';

import Loader from './Loader';
import '../css/popup_button_shippingPolicy_notFound.css';
import '../css/contactUs.css';

// Styled component for form fields
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  border: 'thick double #f40606',
  color: theme.palette.text.secondary,
}));

/**
 * The ContactUs component provides a contact form for users to get in touch with the company.
 * It handles form input, submission, and displays success messages.
 */
const ContactUs = () => {
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(true);
  // State to manage visibility of the success Snackbar
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  // State to store form input values
  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  });
  const navigate = useNavigate();

  /**
   * Handles changes to form inputs and updates the state with new values.
   * @param {Object} event - The change event from the form input.
   */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  /**
   * Handles form submission by showing a success Snackbar.
   */
  const handleSent = () => {
    setShowSuccessSnackbar(true);
  };

  /**
   * Checks if all required fields in the form are filled out.
   * @returns {boolean} - Returns true if all fields are filled, false otherwise.
   */
  const areAllFieldsFilled = () => {
    const { name, email, phone, type, message } = details;
    return name && email && phone && type && message;
  };

  /**
   * Closes the success Snackbar.
   */
  const handleCloseSnackbar = () => {
    setShowSuccessSnackbar(false);
  };

  /**
   * Navigates to the home page and closes the success Snackbar.
   */
  const handleGoToHome = () => {
    navigate('/'); // Navigate to the home page
    handleCloseSnackbar(); // Close the success Snackbar
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Box sx={{ textAlign: 'center', padding: 2 }}>
            <h1 className='contact'>Contact Us...</h1>
            <p className='p'>
              Our customer service hours at BookMe are Monday to Thursday
              <br />
              from 10:00 AM to 1:00 PM, at phone number 03-5583069.
              <br />
              Unfortunately, we are unable to answer all incoming calls, so it is highly recommended to contact us via this form.
              <br />
              Please fill in all the details in this form so the form can be submitted successfully.
            </p>
          </Box>

          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={4}>
                <Item>
                  <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={details.email}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <input
                    type='tel'
                    maxLength='10'
                    placeholder='Phone'
                    name='phone'
                    value={details.phone}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <input
                    type='text'
                    maxLength='25'
                    placeholder='Full Name'
                    name='name'
                    value={details.name}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <input
                    type='text'
                    placeholder='Subject'
                    name='type'
                    value={details.type}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <textarea
                    rows='7'
                    cols='30'
                    fullWidth
                    name='message'
                    value={details.message}
                    onChange={handleInputChange}
                    placeholder='Your Message'
                  />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <button
                    type="submit"
                    onClick={handleSent}
                    disabled={!areAllFieldsFilled()}
                  >
                    Submit
                  </button>
                </Item>
              </Grid>
            </Grid>
          </Box>

          {/* Snackbar for success message */}
          <Snackbar open={showSuccessSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }} action={
              <Button color="inherit" onClick={handleGoToHome}>
                Back to Home Page
              </Button>
            }>
              The form has been sent successfully!
            </Alert>
          </Snackbar>

          <Box sx={{ textAlign: 'center', padding: 2 }}>
            <h3 className='footer'>We are always happy to assist you...</h3>
          </Box>
        </>
      )}
    </div>
  );
};

export default ContactUs;
