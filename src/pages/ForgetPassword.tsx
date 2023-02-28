import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Grid from '@mui/material/Grid';

const primary = blue[500]; // #f44336

export default function ForgetPassword(): JSX.Element {
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
        <Typography variant="h4" style={{ color: 'red', marginBlock:'1rem' }}>
        Forgot your password?
      </Typography>
       <Card sx={{ minWidth: 275 }}>

      <CardContent>
      <Typography variant="h6" style={{ color: 'grey' }}>
        Fill in your email to reset your password.
      </Typography>
      </CardContent>
      <Grid container >
      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        margin:"1rem"
      }}
    >
     
      <TextField 
      //  marginBlock='2.5rem'
      fullWidth={true}
          id="outlined-password-input"
          label="email"
          type="email"
          autoComplete="current-password"
        />

</Box>

    <Grid item xs={3} md={8} display="flex"
  justifyContent="space-around"
  alignItems="center"
   >
      <CardActions>
        <Button variant='contained' size="small">Submit</Button>
     
     
      <Button variant="contained">
       <Link to="/home"> Back Home </Link></Button>
       </CardActions>
    </Grid>
    
</Grid>
       
       </Card>
    </Box>
  );
}






