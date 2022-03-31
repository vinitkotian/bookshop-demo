import { act, render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import BookPurchaseContainer from './BookPurchaseContainer';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import { BrowserRouter as Router } from 'react-router-dom';
import Axios from 'axios';
import BookPurchase from '../../Components/BookPurchase/BookPuchase';
import OrderSummaryContainer from '../OrderSummary/OrderSummaryContainer';
jest.mock('axios');
const env = runtimeEnv();

jest.mock('axios');
describe('Book Purchase Container Test', () => {
  beforeEach(() => {
    Axios.get = jest.fn().mockResolvedValue({
      status: 200,
      data: {
        'id': 2,
        'name': 'Adventures of Sherlock Holmes',
        'authorName': 'Arthur Conan Doyle',
        'price': {
          'currency': 'INR',
          'amount': 1200.0,
        },
        'bookImageUrl':
          'https://dev-bootcamp-book-shop.s3.us-east-2.amazonaws.com/default_book_cover.jpg',
      },
    });

    Axios.post = jest.fn().mockResolvedValue({
      status: 200,
      data: {
        'id': 2,
      },
    });
  });

  it('should load Book purchase container with Get Api call in the useEffect hook', async function () {
    await act(async () => {
      await render(
        <Router>
          <BookPurchaseContainer />
        </Router>
      );
    });
    expect(Axios.get).toHaveBeenCalled();
  });

  it('Order summary page should be rendered when user clicked on the view order summary', async function () {
    await act(async () => {
      await render(
        <Router>
          <BookPurchaseContainer />
        </Router>
      );
    });

    const quantity = await screen.getByTestId('quantity');
    const addressLine1 = await screen.getByTestId('address-line-1');
    const addressLine2 = await screen.getByTestId('address-line-2');
    const city = await screen.getByTestId('city');
    const state = await screen.getByTestId('state');
    const pincode = await screen.getByTestId('pincode');
    const button = await screen.getByTestId('submit');
    fireEvent.change(quantity, { target: { value: '12' } });
    fireEvent.change(quantity, { target: { value: '0' } });
    fireEvent.change(addressLine1, { target: { value: '1st main' } });
    fireEvent.change(addressLine2, { target: { value: 'Guru layout' } });
    fireEvent.change(city, { target: { value: 'Tumkur' } });
    fireEvent.change(state, { target: { value: 'Karnataka' } });
    fireEvent.change(pincode, { target: { value: '572103' } });
    fireEvent.click(button);
    expect(screen.queryByTestId('order-summary-container')).toBeTruthy();
  });

  it('Order Summary should not be displayed in the intial render', async () => {
    await act(async () => {
      await render(
        <Router>
          <BookPurchaseContainer />
        </Router>
      );
    });
    expect(screen.queryByTestId('order-summary-container')).not.toBeTruthy();
  });
});
