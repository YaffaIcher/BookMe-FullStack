import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../states/bookSlice';
import { Grid, Typography, Button, IconButton, Snackbar, Alert, Drawer, Box, IconButton as MuiIconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import '../css/popup_button_shippingPolicy_notFound.css';
import { getBookByName } from '../services/booksService';
import { selectUserId } from '../states/userSlice';
import UserInformation from './UserInformation';

/**
 * The Book component displays detailed information about a book.
 * It fetches book data based on the book's name from the URL parameters,
 * manages the loading state, and provides functionalities for adding the book to the cart,
 * handling user authentication, and showing notifications.
 */
const Book = () => {
    // State to manage loading status
    const [isLoading, setIsLoading] = useState(true);
    // State to control visibility of various Snackbars
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
    const [showLoginSnackbar, setShowLoginSnackbar] = useState(false);
    // State to control the drawer's visibility
    const [drawerOpen, setDrawerOpen] = useState(false);
    // State to store fetched book data
    const [book, setBook] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { name } = useParams();
    const userId = useSelector(selectUserId);

    /**
     * Fetches book data based on the book's name from the URL.
     * Updates the book state with the fetched data or navigates to the home page on error.
     */
    const fetchBookData = async () => {
        try {
            const response = await getBookByName(name);
            setBook(response);
        } catch (error) {
            console.error('Error fetching book data:', error.message);
            navigate('/');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBookData();
    }, [name]);

    /**
     * Handles adding the book to the cart.
     * Shows a login prompt if the user is not authenticated,
     * otherwise dispatches an action to add the book to the cart and shows a success message.
     */
    const buttonAddToCart = () => {
        if (!userId) {
            setShowLoginSnackbar(true);
            setDrawerOpen(true);
            return;
        }
        
        if (book) {
            dispatch(addBook({ ...book }));
            setShowSuccessSnackbar(true);
        }
    };

    /**
     * Closes all Snackbars.
     */
    const handleCloseSnackbar = () => {
        setShowSnackbar(false);
        setShowSuccessSnackbar(false);
        setShowLoginSnackbar(false);
    };

    /**
     * Navigates to the shopping cart and closes the success Snackbar.
     */
    const handleGoToCart = () => {
        navigate('/ShoppingCart');
        handleCloseSnackbar();
    };

    /**
     * Toggles the visibility of the drawer.
     */
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    /**
     * Closes the drawer after a 2-second delay.
     */
    const closeDrawerAfterDelay = () => {
        setTimeout(() => {
            setDrawerOpen(false);
        }, 2000);
    };

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='about'>
                    {book && (
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography variant="h4" gutterBottom className="book">
                                    Book: {book.name}
                                </Typography>
                                <Typography variant="h6">Price: {book.price} $</Typography>
                                <Typography variant="body1">Author: {book.author}</Typography>
                                <Typography variant="body1">Publisher: {book.publishing}</Typography>
                                <Typography variant="body1">Publication Year: {book.publishingYear}</Typography>
                                <Grid item xs={12}>
                                    <IconButton
                                        color="primary"
                                        onClick={buttonAddToCart}
                                        aria-label="add to shopping cart"
                                        style={{ fontSize: 40 }}
                                    >
                                        <AddShoppingCart />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} style={{ textAlign: 'right' }}>
                                <img style={{ height: '50%', maxWidth: '50%', objectFit: 'contain' }} src={book.img || 'https://via.placeholder.com/250x300'} alt={book.name} />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={1} alignItems="flex-start">
                                    <Grid item>
                                        <Typography variant="body1" className="book-summary-title">About the book:</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1" className="book-summary">{book.titel}</Typography>
                                    </Grid>
                                </Grid>
                                <Button variant="contained" onClick={() => navigate('../')} style={{ marginTop: '20px', display: 'block' }}>
                                    Back to Book List
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                </div>
            )}
            
            {/* Snackbar for success message */}
            <Snackbar open={showSuccessSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }} action={
                    <Button color="inherit" onClick={handleGoToCart}>
                        Go to Cart
                    </Button>
                }>
                    The book {book?.name} has been added to the cart successfully!
                </Alert>
            </Snackbar>

            {/* Snackbar for login required */}
            <Snackbar open={showLoginSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="warning" sx={{ width: '100%' }}>
                    You need to log in or register to add a book to the cart.
                </Alert>
            </Snackbar>

            {/* Drawer for UserInformation */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer}
                sx={{ width: 250, flexShrink: 0 }}
            >
                <Box sx={{ width: 400, padding: 2 }}>
                    <MuiIconButton onClick={toggleDrawer} sx={{ marginBottom: 2 }}>
                        <CloseIcon />
                    </MuiIconButton>
                    <UserInformation closeDrawerAfterDelay={closeDrawerAfterDelay} />
                </Box>
            </Drawer>
        </div>
    );
};

export default Book;
