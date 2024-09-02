// Import createBrowserRouter from React Router DOM to configure routing
import { createBrowserRouter } from "react-router-dom";

// Import components for routing
import HomePage from "./components/HomePage";
import OrdersList from "./components/OrdersList";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Layout from "./components/Layout";
import ShippingPolicy from "./components/ShippingPolicy";
import Terms from "./components/Terms";
import ShoppingCart from "./components/ShoppingCart";
import Payment from "./components/Payment";
import Book from "./components/Book";
import NotFound from "./components/NotFound";
import UserInformation from "./components/UserInformation";

// Define and export the application's router configuration
const router = createBrowserRouter([
  {
    // Root route with layout component that wraps all child routes
    element: <Layout />,
    children: [
      {
        // Nested routes under the root path
        path: "/",
        children: [
          {
            // Default route for the root path, renders HomePage component
            index: true,
            element: <HomePage />,
          },
          {
            // Dynamic route for individual books, using the book name as a parameter
            path: ":name",
            element: <Book />,
          },
        ],
      },
      {
        // Route for the About page
        path: "/About",
        element: <About />,
      },
      {
        // Route for the Contact Us page
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        // Route for the Shipping Policy page
        path: "/ShippingPolicy",
        element: <ShippingPolicy />,
      },
      {
        // Route for the Terms page
        path: "/Terms",
        element: <Terms />,
      },
      {
        // Route for the Orders List page
        path: "/OrdersList",
        element: <OrdersList />,
      },
      {
        // Route for User Information page
        path: "/UserInformation",
        element: <UserInformation />,
      },
      {
        // Nested routes under ShoppingCart path
        path: "/ShoppingCart",
        children: [
          {
            // Default route for ShoppingCart, renders ShoppingCart component
            index: true,
            element: <ShoppingCart />,
          },
          {
            // Route for the Payment page within ShoppingCart
            path: "Payment",
            element: <Payment />,
          },
          {
            // Dynamic route for individual books within ShoppingCart
            path: ":name",
            element: <Book />,
          },
        ],
      },
      {
        // Catch-all route for undefined paths, renders NotFound component
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
