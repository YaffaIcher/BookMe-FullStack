import { apiClient } from "../api/apiClient"; // Ensure the path to your API Client is correct

/**
 * Fetches user details by username.
 * @param {string} userName - The username of the user to be fetched.
 * @returns {Promise<Object>} A promise that resolves to the user details.
 * @throws {Error} Throws an error if the request fails.
 */
const getUser = async (userName) => {
    try {
        const response = await apiClient.get(`/User/${userName}`);
        return response;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        throw new Error(`Error fetching user: ${error.message}`);
    }
};

/**
 * Updates user information.
 * @param {Object} userDto - The user data transfer object containing updated user information.
 * @returns {Promise<void>} A promise that resolves when the user is successfully updated.
 * @throws {Error} Throws an error if the request fails.
 */
const updateUser = async (userDto) => {
    try {
        await apiClient.put("user", userDto);
    } catch (error) {
        throw new Error(`Error updating user: ${error.message}`);
    }
};

/**
 * Creates a new user.
 * @param {Object} userDto - The user data transfer object containing new user details.
 * @returns {Promise<Object>} A promise that resolves to the created user details.
 * @throws {Error} Throws an error if the request fails.
 */
const createUser = async (userDto) => {
    try {
        const res = await apiClient.post("user", userDto);
        return res.data;
    } catch (error) {
        throw new Error(`Error creating user: ${error.message}`);
    }
};

export { getUser, updateUser, createUser };
