import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import labels from '../../Config/labels';
import constants from '../../Config/constants';

const BookPurchase = ({ bookDetails, onSubmit }) => {
  const [quantity, setQuantity] = useState(1);
  const [inputValues, setInputValues] = useState({
    'address-line-1': '',
    'address-line-2': '',
    'city': '',
    'state': '',
    'pincode': '',
    'country': 'India',
  });

  const onChangeInput = (e) => {
    let newState = {
      ...inputValues,
      [e.target.id]: e.target.value,
    };
    setInputValues(newState);
  };

  const changeQuantity = (e) => {
    if (e.target.value > 0) {
      setQuantity(e.target.value);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const body = {
      bookId: 2,
      quantity: 2,
      address: {
        lineNoOne: inputValues['address-line-1'],
        lineNoTwo: inputValues['address-line-2'],
        city: inputValues.city,
        state: inputValues.state,
        country: inputValues.country,
        pinCode: inputValues.pincode,
      },
      userId: bookDetails.id,
    };
    onSubmit(body);
  };

  return (
    <form onSubmit={submit}>
      <Container>
        <h1>{labels.bookPurchase.heading}</h1>
        <Grid container item spacing={2}>
          <Grid md={6} item>
            <img
              src={bookDetails.bookImageUrl}
              width="100%"
              alt={'book image'}
              loading="lazy"
            />
          </Grid>
          <Grid md={6} item>
            <h2>
              {labels.bookPurchase.name} : {bookDetails.name}
            </h2>
            <h2>
              {labels.bookPurchase.author} : {bookDetails.authorName}
            </h2>
            <h2>
              {labels.bookPurchase.price} :
              {constants.currency[bookDetails.price?.currency]}{' '}
              {bookDetails.price?.amount}
            </h2>
            <TextField
              inputProps={{ 'data-testid': 'quantity' }}
              id="quantity"
              label={labels.bookPurchase.quantity}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={quantity}
              onChange={changeQuantity}
            />
            <h2>
              {labels.bookPurchase.total} :{' '}
              {constants.currency[bookDetails.price?.currency]}{' '}
              {bookDetails.price?.amount * quantity}{' '}
            </h2>
          </Grid>
        </Grid>
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
        <Grid container item md={12} sx={{ marginY: 3 }}>
          <Button
            data-testid="submit"
            variant="contained"
            fullWidth
            type="submit"
          >
            {labels.bookPurchase.orderNow}
          </Button>
        </Grid>
      </Container>
    </form>
  );
};
export default BookPurchase;