import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

/**
 * UserInformation component toggles between login and signup forms.
 * It initializes by displaying the login form and provides a way to switch between login and signup forms.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.closeDrawerAfterDelay - Function to close the drawer after a specified delay.
 *
 * @returns {JSX.Element} The rendered UserInformation component with conditional form display.
 */
const UserInformation = ({ closeDrawerAfterDelay }) => {
  // State to determine which form to display (login or signup)
  const [isLogin, setIsLogin] = useState(true);

  /**
   * Toggles the form display between login and signup.
   */
  const handleSwitch = () => {
    setIsLogin(prevIsLogin => !prevIsLogin);
  };

  return (
    <div>
      {isLogin ? (
        <LoginForm onSwitch={handleSwitch} closeDrawerAfterDelay={closeDrawerAfterDelay} />
      ) : (
        <SignupForm onSwitch={handleSwitch} closeDrawerAfterDelay={closeDrawerAfterDelay} />
      )}
    </div>
  );
};

export default UserInformation;
