import './App.css'; // Import the application's CSS file

import { RouterProvider } from 'react-router-dom'; // Import RouterProvider from React Router DOM for routing
import router from './router'; // Import the router configuration

/**
 * Main application component that sets up routing for the application.
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  return (
    <>
      {/* Provide the router configuration to the application */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
