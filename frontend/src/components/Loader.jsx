import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled component for the loader image
const StyledImage = styled('img')({
  width: '80%',         // Scale the image to 80% of the viewport width
  maxWidth: '100%',     // Ensure the image does not exceed its container's width
  height: 'auto',       // Maintain aspect ratio
  display: 'block',     // Center the image horizontally
  margin: '0 auto',     // Center the image horizontally
});

/**
 * Loader component displays a loading spinner image while data is being fetched or processed.
 * The image is centered and scaled to fit 80% of the viewport width, maintaining responsiveness.
 *
 * @returns {JSX.Element} The rendered Loader component.
 */
const Loader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <StyledImage src="../assets/loading.gif" alt="Loading spinner" />
    </Box>
  );
};

export default Loader;
