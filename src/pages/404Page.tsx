import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const primary = purple[500]; // #f44336



export default function ErrorPage(): JSX.Element {
  return (
    <Box
   
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // minHeight: '100%',
        height: '100vh',
        width: '100%',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you're looking for doesn't exist.
      </Typography>
      <Button variant="contained">
       <Link to="/home"> Back Home </Link></Button>
    </Box>
  );
}