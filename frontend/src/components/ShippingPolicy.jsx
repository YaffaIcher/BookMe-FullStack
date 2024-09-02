import React, { useEffect, useState } from 'react';
import '../css/popup_button_shippingPolicy_notFound.css';
import Loader from './Loader';

/**
 * ShippingPolicy component displays the shipping policy information.
 * It shows the policy details and an image once loading is complete.
 * During loading, a Loader component is displayed.
 *
 * @returns {JSX.Element} The rendered ShippingPolicy component.
 */
const ShippingPolicy = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(false);
  }, []);
  
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <p className='pShippingPolicy'>
              <h2>Shipping Policy</h2>
              <br />
              Home Delivery
              Delivery Fee: ₪20
              Delivery Time: 5-8 business days
              <br />
              VIP Home Delivery
              Delivery Fee: ₪30
              Delivery Time: 1-2 business days
              <br />
              Delivery is available to customers from Sunday to Thursday between 08:00 and 17:00
              <br />
              Customer pickup by appointment from BookMe offices - 32 Hananai St., Holon
              <br />
              Opening Hours:
              Sunday to Thursday 08:00-17:00
              No delivery fee
              <br />
              *Subject to product availability
            </p>
          </div>
          <img className='imgShippingPolicyNotFound' src="../assets/send.jpg" alt="Shipping Policy" />
        </>
      )}
    </div>
  );
};

export default ShippingPolicy;
