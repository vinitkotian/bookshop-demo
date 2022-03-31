import { Button, Card, Container, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import labels from '../../Config/labels';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const BookPurchaseSuccess = ({ goTohome }) => {
  return (
    <Container align="center">
      <Card variant="outlined" sx={{ padding: '30px', marginTop: '50px' }}>
        <Typography variant="h4">
          {labels.orderSuccess.successMessage}
        </Typography>
        <CheckBoxIcon
          fontSize="large"
          style={{ color: 'green', marginTop: '10px' }}
        />
        <div align="center" style={{ marginTop: '10px' }}>
          <Button
            variant="outlined"
            endIcon={<AddShoppingCartIcon />}
            onClick={goTohome}
          >
            {labels.orderSuccess.continueShopping}
          </Button>
        </div>
      </Card>
    </Container>
  );
};
export default BookPurchaseSuccess;
