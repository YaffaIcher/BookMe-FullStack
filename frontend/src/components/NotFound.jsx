import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/popup_button_shippingPolicy_notFound.css';

/**
 * NotFound component displays a 404 error message when a page is not found.
 * It includes an image and a button that navigates the user back to the home page.
 *
 * @returns {JSX.Element} The rendered NotFound component.
 */
const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1 id="movingTitle" className='success-popup'>NOT FOUND 404</h1>

      <img className='imgShippingPolicyNotFound' src="../assets/not found.jpg" alt="NOT FOUND 404" />
      <br />  <br />
      <button className='button' onClick={() => navigate('/')}>Back to Home Page</button>

    </div>
  );
}

export default NotFound;
