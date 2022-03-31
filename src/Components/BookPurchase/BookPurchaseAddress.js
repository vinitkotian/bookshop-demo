import { Grid, TextField } from '@mui/material';
import React from 'react';
import labels from '../../Config/labels';

const BookPurchaseAddress = ({ onChangeInput }) => {
  return (
    <>
      <Grid container item md={12} sx={{ marginTop: 2 }}>
        <TextField
          inputProps={{ 'data-testid': 'address-line-1' }}
          fullWidth={true}
          helperText={labels.bookPurchase.addressLineOneHelperText}
          id="address-line-1"
          label={labels.bookPurchase.addressLineOne}
          required={true}
          onChange={onChangeInput}
        />
      </Grid>
      <Grid container item md={12} sx={{ marginTop: 2 }}>
        <TextField
          inputProps={{ 'data-testid': 'address-line-2' }}
          fullWidth={true}
          helperText={labels.bookPurchase.addressLineTwoHelperText}
          id="address-line-2"
          label={labels.bookPurchase.addressLineTwo}
          required={true}
          onChange={onChangeInput}
        />
      </Grid>
      <Grid container item md={12} sx={{ marginTop: 1 }} spacing={2}>
        <Grid md={4} item>
          <TextField
            inputProps={{ 'data-testid': 'city' }}
            fullWidth={true}
            helperText={labels.bookPurchase.city}
            id="city"
            label={labels.bookPurchase.city}
            required={true}
            onChange={onChangeInput}
          />
        </Grid>
        <Grid md={4} item>
          <TextField
            inputProps={{ 'data-testid': 'state' }}
            fullWidth={true}
            helperText={labels.bookPurchase.state}
            id="state"
            label={labels.bookPurchase.state}
            required={true}
            onChange={onChangeInput}
          />
        </Grid>
        <Grid md={4} item>
          <TextField
            inputProps={{ 'data-testid': 'pincode' }}
            fullWidth={true}
            helperText={labels.bookPurchase.pincode}
            id="pincode"
            label={labels.bookPurchase.pincode}
            required={true}
            onChange={onChangeInput}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default BookPurchaseAddress;
