import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, selectBooksCart, updateQty } from '../states/bookSlice';
import Loader from './Loader';
import { Button, Snackbar, Alert } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

/**
 * ShoppingCart component displays the user's shopping cart.
 * It allows users to update quantities, remove items, and proceed to checkout.
 * Displays loading state, error messages, and success notifications.
 *
 * @returns {JSX.Element} The rendered ShoppingCart component.
 */
const ShoppingCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const booksInCart = useSelector(selectBooksCart);
  const [showPopup, setShowPopup] = useState(true);
  const [priceAll, setPriceAll] = useState(0);

  /**
   * Calculates the total price of items in the cart.
   */
  const handleTotalPayment = () => {
    if (booksInCart.length > 0) {
      setShowPopup(false);
    }

    let totalPayment = 0;

    booksInCart.forEach((product) => {
      totalPayment += product.price * product.qty;
    });
    setPriceAll(totalPayment.toFixed(2));
  };

  useEffect(() => {
    if (booksInCart.length === 0) {
      setShowPopup(true);
    }
    setIsLoading(false);
    handleTotalPayment();
  }, [booksInCart]);

  /**
   * Increases the quantity of a book in the cart.
   * @param {Object} book - The book object to update.
   */
  const handlePlus = (book) => {
    const newQty = book.qty + 1;
    dispatch(updateQty({ name: book.name, qty: newQty }));
  };

  /**
   * Decreases the quantity of a book in the cart.
   * @param {Object} book - The book object to update.
   */
  const handleMinus = (book) => {
    const newQty = Math.max(1, book.qty - 1);
    dispatch(updateQty({ name: book.name, qty: newQty }));
  };

  /**
   * Removes a book from the cart.
   * @param {string} name - The name of the book to remove.
   */
  const deleteBookFromCart = (name) => {
    dispatch(removeBook(name));
  };

  /**
   * Handles checkout process, showing a warning if terms are not accepted.
   */
  const handleCheckout = () => {
    if (!isChecked) {
      setOpenSnackbar(true);
      return;
    }
    setOpenSuccessSnackbar(true);
    setTimeout(() => {
      navigate('Payment');
    }, 2000);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleCloseSuccessSnackbar = () => {
    setOpenSuccessSnackbar(false);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    maxWidth: 400,
  }));

  const totalPaymentStyle = {
    textShadow: '4px 4px 10px #6e92b8',
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: '200%',
    color: '#232078'
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <br />
          <h1 className='cart'>~ SHOPPING CART ~</h1>
          {showPopup && (
            <div className="success-popup">
              <br />
              <img className='imgShippingPolicyNotFound' src="../assets/cart.jpg" alt="Cart" />
              <br />
              <br />
              <Button variant="contained" color="primary" onClick={() => navigate('/')}>Back to Home Page</Button>
            </div>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Stack spacing={2} direction="row" alignItems="center">
              {booksInCart.map((book) => (
                <div key={book?.name} sx={{ my: 1, mx: 'auto', p: 2, display: 'flex', alignItems: 'center' }}>
                  <Item sx={{ my: 1, mx: 'auto', p: 2 }}>
                    <Typography noWrap>
                      <h3><Link to={book.name}>{book.name}</Link></h3>
                    </Typography>
                    <Typography noWrap> Price: {book?.price} $ </Typography>
                    <br />
                    <Typography noWrap> Choose how many books you want to buy: {book.qty} </Typography>
                    <br />
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<AddIcon />}
                      onClick={() => handlePlus(book)}
                      sx={{ minWidth: 0, padding: 1 }}
                    ></Button>
                    {" "}
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<RemoveIcon />}
                      onClick={() => handleMinus(book)}
                      sx={{ minWidth: 0, padding: 1 }}
                    ></Button>
                    <br />
                    <br />
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteBookFromCart(book.name)}
                      sx={{ minWidth: 0, padding: 1 }}
                    > Remove this book from the cart </Button>
                  </Item>
                </div>
              ))}
            </Stack>
          </Box>
          <br />
          <div style={totalPaymentStyle}>Total amount to pay: {priceAll} $</div>
          <br />
          {error && <Typography color="error">{error}</Typography>}
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCheckout}
            sx={{ minWidth: 150 }}
          >Proceed to Payment</Button>

          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity="warning" action={
              <Button color="inherit" onClick={() => {
                setIsChecked(true);
                handleCloseSnackbar();
                setOpenSuccessSnackbar(true);
                setTimeout(() => {
                  navigate('Payment');
                }, 2000);
              }}>
                Accept
              </Button>
            }>
              Please accept the terms and conditions to proceed.
            </Alert>
          </Snackbar>

          <Snackbar open={openSuccessSnackbar} autoHideDuration={3000} onClose={handleCloseSuccessSnackbar}>
            <Alert onClose={handleCloseSuccessSnackbar} severity="success">
              Successfully accepted terms. Redirecting to payment...
            </Alert>
          </Snackbar>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
