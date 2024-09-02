import { createSlice } from "@reduxjs/toolkit";

// Initial state for the book slice
const initialState = {
  cartBooks: [],
};

// Create a slice of the Redux store for managing the cart
const bookSlice = createSlice({
  name: "cart", // The name of the slice
  initialState, // The initial state of the slice
  reducers: {
    /**
     * Adds a book to the cart or updates its quantity if it already exists.
     * @param {Object} state - The current state of the slice.
     * @param {Object} action - The action containing the book details.
     * @param {string} action.payload.name - The name of the book.
     * @param {number} action.payload.qty - The quantity to add.
     */
    addBook: (state, action) => {
      const { name, qty } = action.payload;
      const existingBook = state.cartBooks.find((book) => book.name === name);

      if (existingBook) {
        existingBook.qty += qty;
      } else {
        state.cartBooks.push(action.payload);
      }
    },

    /**
     * Removes a book from the cart by name.
     * @param {Object} state - The current state of the slice.
     * @param {Object} action - The action containing the name of the book to remove.
     * @param {string} action.payload - The name of the book to remove.
     */
    removeBook: (state, action) => {
      const bookName = action.payload;
      state.cartBooks = state.cartBooks.filter((book) => book.name !== bookName);
    },

    /**
     * Updates the quantity of a book in the cart.
     * @param {Object} state - The current state of the slice.
     * @param {Object} action - The action containing the book details.
     * @param {string} action.payload.name - The name of the book.
     * @param {number} action.payload.qty - The new quantity of the book.
     */
    updateQty: (state, action) => {
      const { name, qty } = action.payload;
      const existingProduct = state.cartBooks.find((book) => book.name === name);

      if (existingProduct) {
        existingProduct.qty = qty;
      }
    }
  },
});

// Export actions for use in components
export const { addBook, removeBook, updateQty } = bookSlice.actions;

// Selector for accessing the cartBooks from the state
export const selectBooksCart = (state) => state.booksCart.cartBooks;

// Export the reducer to be included in the store
export default bookSlice.reducer;
