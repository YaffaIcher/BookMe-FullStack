import { apiClient } from "../api/apiClient"; // Import the configured Axios instance

/**
 * Fetches the list of all books.
 * @returns {Promise<Object[]>} A promise that resolves to the list of books.
 * @throws Will throw an error if the request fails.
 */
const getBooks = async () => {
    try {
        const res = await apiClient.get("book");
        return res.data;
    } catch (error) {
        throw error;
    }
}

/**
 * Fetches a book by its name.
 * @param {string} name - The name of the book to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the book data.
 * @throws Will throw an error if the request fails.
 */
const getBookByName = async (name) => {
    try {
        const res = await apiClient.get(`book/${name}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

/**
 * Updates book details.
 * @param {Object} bookDetails - The details of the book to update.
 * @returns {Promise<void>} A promise that resolves when the update is complete.
 * @throws Will throw an error if the request fails.
 */
const updateBook = async (bookDetails) => {
    try {
        await apiClient.put("book", bookDetails);
    } catch (error) {
        throw error;
    }
}

/**
 * Deletes a book by its name.
 * @param {string} name - The name of the book to delete.
 * @returns {Promise<void>} A promise that resolves when the deletion is complete.
 * @throws Will throw an error if the request fails.
 */
const deleteBook = async (name) => {
    try {
        await apiClient.delete(`book/${name}`);
    } catch (error) {
        throw error;
    }
}

export { getBooks, getBookByName, updateBook, deleteBook };
