import { createSlice } from "@reduxjs/toolkit";

// Initial state for the user slice
const initialState = {
  currentUser: null,
};

// Create a slice of the Redux store for managing user data
const userSlice = createSlice({
  name: "user", // The name of the slice
  initialState, // The initial state of the slice
  reducers: {
    /**
     * Sets the current user in the state.
     * @param {Object} state - The current state of the slice.
     * @param {Object} action - The action containing the user data.
     * @param {Object} action.payload - The user to set as the current user.
     */
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },

    /**
     * Updates the current user's details.
     * @param {Object} state - The current state of the slice.
     * @param {Object} action - The action containing the user ID and updated fields.
     * @param {string} action.payload.id - The ID of the user to update.
     * @param {Object} action.payload.updatedFields - The fields to update on the current user.
     */
    updateUser: (state, action) => {
      const { id, ...updatedFields } = action.payload;
      if (state.currentUser && state.currentUser.id === id) {
        state.currentUser = { ...state.currentUser, ...updatedFields };
      }
    },

    /**
     * Removes the current user from the state.
     * @param {Object} state - The current state of the slice.
     */
    removeUser: (state) => {
      state.currentUser = null;
    },
  },
});

// Export actions for use in components
export const { setUser, updateUser, removeUser } = userSlice.actions;

// Selector for accessing the current user from the state
export const selectCurrentUser = (state) => state.user.currentUser;

// Selector for accessing the current user's ID
export const selectUserId = (state) => state.user.currentUser?.id;

// Export the reducer to be included in the store
export default userSlice.reducer;
