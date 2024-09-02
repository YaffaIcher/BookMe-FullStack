import { createSlice } from "@reduxjs/toolkit";

// Initial state for the order slice
const initialState = {
  userOrders: [],
};

// Create a slice of the Redux store for managing user orders
const orderSlice = createSlice({
  name: "orders", // The name of the slice
  initialState, // The initial state of the slice
  reducers: {
    /**
     * Adds a new order to the user's order list.
     * @param {Object} state - The current state of the slice.
     * @param {Object} action - The action containing the order details.
     * @param {Object} action.payload - The order to add.
     */
    addOrder: (state, action) => {
      state.userOrders.push(action.payload);
    },

    /**
     * Removes an order from the user's order list by order ID.
     * @param {Object} state - The current state of the slice.
     * @param {Object} action - The action containing the ID of the order to remove.
     * @param {string} action.payload - The ID of the order to remove.
     */
    removeOrder: (state, action) => {
      const orderId = action.payload;
      state.userOrders = state.userOrders.filter((order) => order.orderId !== orderId);
    },

    /**
     * Updates an existing order in the user's order list by order ID.
     * @param {Object} state - The current state of the slice.
     * @param {Object} action - The action containing the updated order details.
     * @param {string} action.payload.orderId - The ID of the order to update.
     * @param {Object} action.payload.updatedFields - The fields to update.
     */
    updateOrder: (state, action) => {
      const { orderId, ...updatedFields } = action.payload;
      const existingOrder = state.userOrders.find((order) => order.orderId === orderId);
      if (existingOrder) {
        Object.assign(existingOrder, updatedFields);
      }
    },
  },
});

// Export actions for use in components
export const { addOrder, removeOrder, updateOrder } = orderSlice.actions;

// Selector for accessing the userOrders from the state
export const selectUserOrders = (state) => state.orders.userOrders;

// Export the reducer to be included in the store
export default orderSlice.reducer;
