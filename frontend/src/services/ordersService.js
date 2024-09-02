import { apiClient } from "../api/apiClient"; // Ensure the path to your API Client is correct

/**
 * Fetches all orders for a given user.
 * @param {string} userId - The ID of the user whose orders are to be retrieved.
 * @returns {Promise<Object[]>} A promise that resolves to a list of orders.
 * @throws {Error} Throws an error if the request fails.
 */
const getOrders = async (userId) => {
    try {
        const res = await apiClient.get(`order/${userId}`);
        return res.data;
    } catch (error) {
        throw new Error(`Error fetching orders: ${error.message}`);
    }
}

/**
 * Deletes an order by its ID.
 * @param {string} orderId - The ID of the order to be deleted.
 * @returns {Promise<void>} A promise that resolves when the order is successfully deleted.
 * @throws {Error} Throws an error if the request fails.
 */
const deleteOrder = async (orderId) => {
    try {
        await apiClient.delete(`order/${orderId}`);
    } catch (error) {
        throw new Error(`Error deleting order: ${error.message}`);
    }
}

/**
 * Creates a new order.
 * @param {Object} createOrderRequest - The details of the order to be created.
 * @returns {Promise<Object>} A promise that resolves to the response of the order creation request.
 * @throws {Error} Throws an error if the request fails.
 */
const createOrder = async (createOrderRequest) => {
    try {
        const res = await apiClient.post("order", createOrderRequest);
        return res; // Return the full response, including status
    } catch (error) {
        throw new Error(`Error creating order: ${error.message}`);
    }
}

export { getOrders, deleteOrder, createOrder };
