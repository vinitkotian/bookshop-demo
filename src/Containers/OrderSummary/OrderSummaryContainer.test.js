import React from 'react';
import { render } from '@testing-library/react';
import OrderSummaryContainer from './OrderSummaryContainer';
import orderDetails from './__factory__/OrderDetails-factory';

describe('Order Summary', () => {
  it('should have title of order summary', async function () {
    const { getByText } = render(
      <OrderSummaryContainer orderDetails={orderDetails()} />
    );
    expect(getByText('Order Summary')).toBeInTheDocument();
  });
  it('should have book name in the order summary', async function () {
    const { getByText } = render(
      <OrderSummaryContainer orderDetails={orderDetails()} />
    );
    expect(getByText('Book Name:')).toBeInTheDocument();
  });

  it('should have book name in the order summary', async function () {
    const { getByText } = render(
      <OrderSummaryContainer orderDetails={orderDetails()} />
    );
    expect(getByText('Author Name:')).toBeInTheDocument();
  });
});
