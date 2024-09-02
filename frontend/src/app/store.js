import { configureStore } from "@reduxjs/toolkit";
import bookReducer from '../states/bookSlice'; // Reducer for managing the book cart state
import userReducer from '../states/userSlice'; // Reducer for managing the user state
import orderReducer from '../states/orderSlice'; // Reducer for managing the orders state

// Configure and create the Redux store
const store = configureStore({
    reducer: {
        booksCart: bookReducer, // Manages the state related to books in the cart
        user: userReducer,      // Manages the state related to the user
        orders: orderReducer,  // Manages the state related to orders
    }
});

export default store; // Export the configured store for use in the application
