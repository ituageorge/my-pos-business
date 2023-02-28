import React, { useState } from 'react';
import { FormControl, TextField, Button, Box, Typography } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


 function OrderForm() {
  const [name, setName] = useState('');
  const [nameOfProduct, setNameOfProduct] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [addressToBeDeliveredTo, setAddressToBeDeliverdTo] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');

  const [image, setImage] = useState('');
  
  // const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
  const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
  // const handleCapture = (event: { target: { files: any[]; }; }) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };

  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box sx={{ maxWidth:'60%', margin:'0 auto' }} >
      
      <Box component='div' sx={{ marginBlock:5 }}>
      <Typography sx={{ fontSize:"3rem"}} component='b' variant='h4'>
          Orders
        </Typography>
       
      </Box>
    <Box component='div' sx={{ width:'90%'}}>   
    <Typography component="b" variant="h2">
          Place your order here
        </Typography>
    <form onSubmit={handleSubmit}>
    <FormControl fullWidth>
        <TextField
         margin="normal"
          label="Your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
         margin="normal"
          label="Name of Product"
          value={nameOfProduct}
          onChange={(event) => setNameOfProduct(event.target.value)}
          required
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          label="Phone"
          type="phone"
          margin="normal"
          value={phoneNum}
          onChange={(event) => setPhoneNum(event.target.value)}
          required
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          label="Address"
          placeholder='eg. No. 1, example street, town / city, state.'
          value={addressToBeDeliveredTo}
          margin="normal"
          onChange={(event) => setAddressToBeDeliverdTo(event.target.value)}
          required
        />
      </FormControl>


      <FormControl fullWidth>
      <TextField
        type="file"
        // accept='image/*'
        // capture="camera"
        onChange={handleCapture}
        InputProps={{
          endAdornment: (
            <CameraAltIcon />
          ),
        }}
      />
      {image && <img src={image} alt="captured" />}
    </FormControl>

      <FormControl fullWidth>
        <TextField
          label="Quantity"
          type="number"
          value={quantity}
          margin="normal"
          onChange={(event) => setQuantity(parseInt(event.target.value))}
          InputProps={{ inputProps: { min: 1 } }}
          required
        />
      </FormControl>
      <FormControl fullWidth>
      <TextField
      id="product-description"
      label="Product Description"
      multiline
      rows={4}
      value={description}
      onChange={(event) => setDescription(event.target.value)}
      // onChange={handleDescriptionChange}
      fullWidth
    />
      </FormControl>
      <Box sx={{my:3}}>
      <Button type="submit" variant="contained" color="primary">
        Submit Order
      </Button>
      </Box>
    </form>
    </Box>
    </Box>
  );
}

export default OrderForm;
