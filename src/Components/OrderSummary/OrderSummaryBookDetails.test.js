import React from 'react';
import OrderSummaryBookDetails from './OrderSummaryBookDetails';
import { render } from '@testing-library/react';

describe('Address', () => {
  it('should display name of book from order details', function () {
    const { getByText } = render(
      <OrderSummaryBookDetails bookDetails={bookDetails()} />
    );
    expect(getByText('Java by Sam')).toBeTruthy();
  });

  it('should display quantity of book from order details', function () {
    const { getByText } = render(
      <OrderSummaryBookDetails
        bookDetails={bookDetails()}
        quantity={getQuantity()}
      />
    );
    expect(getByText('2')).toBeTruthy();
  });

  it('should display Price of book from order details', function () {
    const { getByText } = render(
      <OrderSummaryBookDetails
        bookDetails={bookDetails()}
        quantity={getQuantity()}
      />
    );
    expect(getByText('₹ 1000.28')).toBeTruthy();
  });
  function bookDetails() {
    return {
      name: 'Java by Sam',
      authorName: 'Danish Lilly',
      quantity: 2,
      price: {
        'currency': 'INR',
        'amount': 1000.28,
      },
    };
  }
  function getQuantity() {
    return 2;
  }
});
