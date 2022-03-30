import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import BookPurchase from './BookPuchase';

describe('Book Purchase Test', () => {
  const bookDetails = {
    'id': 2,
    'name': 'Adventures of Sherlock Holmes',
    'authorName': 'Arthur Conan Doyle',
    'price': {
      'currency': 'INR',
      'amount': 1200.0,
    },
    'bookImageUrl':
      'https://dev-bootcamp-book-shop.s3.us-east-2.amazonaws.com/default_book_cover.jpg',
  };

  let onSubmit = jest.fn();
  it('render the BookPurchase component with correct data', function () {
    const { getByText } = render(
      <BookPurchase bookDetails={bookDetails} onSubmit={onSubmit} />
    );
    expect(getByText('ORDER YOUR BOOK NOW')).toBeInTheDocument();
  });

  it('onSubmit function should be called when submitted', async function () {
    render(<BookPurchase bookDetails={bookDetails} onSubmit={onSubmit} />);
    const quantity = await screen.getByTestId('quantity');
    const addressLine1 = await screen.getByTestId('address-line-1');
    const addressLine2 = await screen.getByTestId('address-line-2');
    const city = await screen.getByTestId('city');
    const state = await screen.getByTestId('state');
    const pincode = await screen.getByTestId('pincode');
    const country = await screen.getByTestId('country');
    const button = await screen.getByTestId('submit');
    fireEvent.change(quantity, { target: { value: '12' } });
    fireEvent.change(quantity, { target: { value: '0' } });
    fireEvent.change(addressLine1, { target: { value: '1st main' } });
    fireEvent.change(addressLine2, { target: { value: 'Guru layout' } });
    fireEvent.change(city, { target: { value: 'Tumkur' } });
    fireEvent.change(state, { target: { value: 'Karnataka' } });
    fireEvent.change(pincode, { target: { value: '572103' } });
    fireEvent.change(country, { target: { value: 'India' } });
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
