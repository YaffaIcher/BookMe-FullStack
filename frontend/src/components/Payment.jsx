import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './Loader';
import SendToHome from './SendToHome';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Button, Snackbar, Alert } from '@mui/material';
import '../css/popup_button_shippingPolicy_notFound.css';
import { createOrder } from '../services/ordersService';
import { selectBooksCart } from '../states/bookSlice';
import { selectUserId } from '../states/userSlice';
import { addOrder } from '../states/orderSlice';

// Custom styles for heading
const headingStyle = {
  textShadow: '4px 4px 10px #6e92b8',
  fontFamily: "'Times New Roman', Times, serif",
  fontSize: '200%',
  color: '#000000', // Changed color to black
};

// Payment component for handling payment and shipping details
const Payment = () => {
  // State hooks
  const [isLoading, setIsLoading] = useState(true);
  const [creditCard, setCreditCard] = useState({
    cardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: '',
  });
  const [selectedOption, setSelectedOption] = useState('Self-pickup from the store with a cost of 0₪');
  const [openDialog, setOpenDialog] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Redux hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const booksInCart = useSelector(selectBooksCart);
  const userId = useSelector(selectUserId);

  // Effect hook to set loading state
  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Handler for input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCreditCard({ ...creditCard, [name]: value });
  };

  // Handler for shipping option changes
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value !== 'Self-pickup from the store with a cost of 0₪') {
      setOpenDialog(true);
    }
  };

  // Handler to save shipping details and close the dialog
  const handleSaveShippingDetails = () => {
    setOpenDialog(false);
  };

  // Handler for payment process
  const handlePayment = async () => {
    if (!userId) {
      setErrorMessage('User not found, please log in again');
      return;
    }

    if (isCreditCardValid()) {
      const totalAmount = calculateTotalAmount();

      if (totalAmount > 0) {
        const orderRequest = {
          userId: userId,
          totalAmount: totalAmount,
          paymentStatus: true,
          orderDate: new Date().toISOString(),
        };

        try {
          const response = await createOrder(orderRequest);
          if (response.status === 200 || response.status === 201) {
            dispatch(addOrder({ ...orderRequest, orderId: response.data.orderId }));
            setSuccessMessage('Payment was successful');
            // Prevent request duplication on page refresh
            localStorage.setItem('orderCompleted', true);
            setTimeout(() => {
              navigate('/OrdersList');
            }, 2000);
          } else {
            throw new Error(`The received status is not valid: ${response.status}`);
          }
        } catch (error) {
          console.error('Error creating order:', error.response || error.message);
          setErrorMessage(`Order was not created successfully: ${error.message}`);
        }
      } else {
        setErrorMessage('The total amount is not valid');
      }
    } else {
      setErrorMessage('Credit card details are not valid');
    }
  };

  // Validates credit card details
  const isCreditCardValid = () => {
    return (
      creditCard.cardNumber.length === 16 &&
      creditCard.cardHolderName.length > 0 &&
      creditCard.expirationDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/) &&
      creditCard.cvv.length === 3
    );
  };

  // Calculates the total payment amount including shipping costs
  const calculateTotalAmount = () => {
    let totalPayment = 0;

    booksInCart.forEach((book) => {
      totalPayment += book.price * book.qty;
    });

    let shippingCost = 0;
    switch (selectedOption) {
      case 'Self-pickup from the store with a cost of 0₪':
        shippingCost = 0;
        break;
      case 'Delivery to home within 5-8 business days with a cost of 20₪':
        shippingCost = 20;
        break;
      case 'Delivery to home within 1-2 business days with a cost of 30₪ VIP delivery':
        shippingCost = 30;
        break;
      default:
        shippingCost = 0;
    }

    const totalAmount = totalPayment + shippingCost;

    return isNaN(totalAmount) ? 0 : parseFloat(totalAmount.toFixed(2));
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <br />
          <h2 style={headingStyle}>Personal Details</h2>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '50%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="firstName" name="firstName" multiline maxRows={4} variant="standard" type='text' label="First Name" fullWidth onChange={handleInputChange} focused />
            <br />
            <TextField id="lastName" name="lastName" multiline maxRows={4} variant="standard" type='text' label="Last Name" fullWidth onChange={handleInputChange} focused />
            <br />
            <TextField id="phone" name="phone" multiline maxRows={4} variant="standard" type="phone" label="Phone" fullWidth onChange={handleInputChange} focused />
            <br />
            <TextField id="email" name="email" multiline maxRows={4} variant="standard" type="email" label="Email" fullWidth onChange={handleInputChange} focused />
            <br />
            <TextField id="invoiceName" name="invoiceName" multiline maxRows={4} variant="standard" type='text' label="Invoice Name" fullWidth onChange={handleInputChange} focused />
          </Box>

          <div>
            <h2 style={headingStyle}>Shipping Method Selection</h2>
            <Box sx={{ minWidth: 800 }}>
              <FormControl sx={{ m: 1, minWidth: 800 }}>
                <InputLabel id="shipping-option-label">Select Shipping Method:</InputLabel>
                <Select
                  labelId="shipping-option-label"
                  value={selectedOption}
                  label="selectedOption"
                  onChange={handleOptionChange}
                >
                  <MenuItem value="Self-pickup from the store with a cost of 0₪">Self-pickup from the store with a cost of 0₪</MenuItem>
                  <MenuItem value="Delivery to home within 5-8 business days with a cost of 20₪">Delivery to home within 5-8 business days with a cost of 20₪</MenuItem>
                  <MenuItem value="Delivery to home within 1-2 business days with a cost of 30₪ VIP delivery">Delivery to home within 1-2 business days with a cost of 30₪ VIP delivery</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
            <DialogContent>
              <SendToHome />
              <br />
              <Button variant="contained" onClick={handleSaveShippingDetails}>Save Shipping Details</Button>
            </DialogContent>
          </Dialog>

          <div>
            <h2 style={headingStyle}>Credit Card Details for Secure Payment</h2>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '70%' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="cardNumber" name="cardNumber" label="Credit Card Number" fullWidth onChange={handleInputChange} />
              <br />
              <TextField id="cardHolderName" name="cardHolderName" label="Cardholder Name" fullWidth onChange={handleInputChange} />
              <br />
              <TextField id="expirationDate" name="expirationDate" label="Card Expiry (MM/YY)" fullWidth onChange={handleInputChange} />
              <br />
              <TextField id="cvv" name="cvv" label="CVV" fullWidth onChange={handleInputChange} />
            </Box>
            <br />
            <Button variant="contained" color="primary" onClick={handlePayment}>Make Payment</Button>
          </div>
        </>
      )}
      <Snackbar open={Boolean(successMessage)} autoHideDuration={6000} onClose={() => setSuccessMessage('')}>
        <Alert onClose={() => setSuccessMessage('')} severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert>
      </Snackbar>
      <Snackbar open={Boolean(errorMessage)} autoHideDuration={6000} onClose={() => setErrorMessage('')}>
        <Alert onClose={() => setErrorMessage('')} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Payment;
