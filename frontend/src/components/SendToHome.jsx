import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Loader from './Loader';

/**
 * SendToHome component collects and displays the user's shipping address.
 * It includes fields for street address, city, postal code, and additional notes.
 * It also handles the loading state with a Loader component while the form is loading.
 *
 * @returns {JSX.Element} The rendered SendToHome component with a form for shipping address.
 */
const SendToHome = () => {
  const [shippingAddress, setShippingAddress] = useState({
    StreetAndNumber: '',
    city: '',
    postalCode: '',
    note: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h2>Shipping Address</h2>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '50%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              name="StreetAndNumber"
              multiline
              maxRows={4}
              variant="standard"
              type='text'
              label="Street and Number"
              fullWidth
              onChange={handleInputChange}
              focused
            />
            <br />
            <TextField
              name="city"
              multiline
              maxRows={4}
              variant="standard"
              type='text'
              label="City"
              fullWidth
              onChange={handleInputChange}
              focused
            />
            <TextField
              name="postalCode"
              multiline
              maxRows={4}
              variant="standard"
              type='text'
              label="Postal Code"
              fullWidth
              onChange={handleInputChange}
              focused
            />
            <TextField
              name="note"
              multiline
              maxRows={4}
              variant="standard"
              type='text'
              label="Notes"
              fullWidth
              onChange={handleInputChange}
              focused
            />
          </Box>
        </div>
      )}
    </div>
  );
};

export default SendToHome;
