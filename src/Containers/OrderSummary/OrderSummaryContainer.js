import React from 'react';
import OrderSummaryBookDetails from '../../Components/OrderSummary/OrderSummaryBookDetails';
import OrderSummaryAddress from '../../Components/OrderSummary/OrderSummaryAddress';
import labels from '../../Config/labels';
import { Container, Typography } from '@mui/material';

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
    </Container>
  );
};

export default OrderSummaryContainer;
