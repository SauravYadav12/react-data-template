import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <div
        className="four_zero_four_bg"
        style={{
          backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif',
          height: '400px',
          width: '50%',
          backgroundPosition: 'center'
        }}
      ></div>
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">The page you’re looking for doesn’t exist.</Typography>
      <Link to="/" variant="contained">
        Back Home
      </Link>
    </Box>
  );
}
