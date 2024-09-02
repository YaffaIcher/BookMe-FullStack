import axios from "axios";

// Create an Axios instance with pre-configured settings
export const apiClient = axios.create({
    baseURL: "https://localhost:7096/api", // Base URL for API requests
    headers: {
        'Content-Type': 'application/json' // Set the default content type to JSON
    }
});
