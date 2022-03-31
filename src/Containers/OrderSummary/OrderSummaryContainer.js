import React from 'react';
import OrderSummaryBookDetails from '../../Components/OrderSummary/OrderSummaryBookDetails';
import OrderSummaryAddress from '../../Components/OrderSummary/OrderSummaryAddress';
import labels from '../../Config/labels';
import { Button, Container, Typography } from '@mui/material';
import PaymentDetails from '../../Components/OrderSummary/PaymentDetails';

const OrderSummaryContainer = ({ onSubmit, orderDetails }) => {
  return (
    <Container data-testid="order-summary-container">
      <Typography variant="h3" align={'center'} sx={{ marginTop: '15px' }}>
        {labels.orderSummary.heading}
      </Typography>
      <OrderSummaryAddress address={orderDetails.address} />
      <OrderSummaryBookDetails
        bookDetails={orderDetails.bookDetails}
        quantity={orderDetails.quantity}
      />
      <PaymentDetails />
      <Button
        data-testid="submit"
        variant="contained"
        fullWidth
        type="submit"
        onClick={onSubmit}
        sx={{ marginY: '20px' }}
      >
        {labels.orderSummary.confirmOrder}
      </Button>
    </Container>
  );
};

export default OrderSummaryContainer;
