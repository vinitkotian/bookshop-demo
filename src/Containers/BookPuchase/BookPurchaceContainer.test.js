import { act, render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import httpService from '../../Utils/httpService';
import BookPurchaseContainer from './BookPurchaseContainer';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import { BrowserRouter as Router } from 'react-router-dom';
import Axios from 'axios';
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

  it('should load Book purchase container', async function () {
    const url = `/book/1`;
    httpService().get = jest.fn();
    await act(async () => {
      await render(
        <Router>
          <BookPurchaseContainer />
        </Router>
      );
    });
    expect(Axios.get).toHaveBeenCalled();
  });

  it('Should call the post call', async function () {
    await act(async () => {
      await render(
        <Router>
          <BookPurchaseContainer />
        </Router>
      );
    });
    expect(Axios.get).toHaveBeenCalled();
  });

  it('should call the post method', async function () {
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
    const country = await screen.getByTestId('country');
    const button = await screen.getByTestId('submit');
    fireEvent.change(quantity, { target: { value: '12' } });
    fireEvent.change(quantity, { target: { value: '0' } });
    fireEvent.change(addressLine1, { target: { value: '1st main' } });
    fireEvent.change(addressLine2, { target: { value: 'Guru layout' } });
    fireEvent.change(city, { target: { value: 'Tumkur' } });
    fireEvent.change(state, { target: { value: 'Karnataka' } });
    fireEvent.change(pincode, { target: { value: '572103' } });
    fireEvent.click(button);
    expect(Axios.post).toHaveBeenCalled();
  });
});
