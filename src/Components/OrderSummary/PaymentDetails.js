import React from 'react';
import { Typography } from '@mui/material';
import labels from '../../Config/labels';

const PaymentDetails = () => {
  return (
    <>
      <Typography variant="h5" align={'center'} sx={{ marginTop: '25px' }}>
        {labels.paymentDetails.heading}
      </Typography>
    </>
  );
};
export default PaymentDetails;
