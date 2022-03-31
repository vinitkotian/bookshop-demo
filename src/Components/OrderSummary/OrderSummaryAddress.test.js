import React from 'react';
import Address from './OrderSummaryAddress';
import { render } from '@testing-library/react';

describe('Address', () => {
  it('should display value of address line one when address model has line one', function () {
    const { getByText } = render(<Address address={getAddress()} />);
    const address = getAddress();
    const completeAddress = address.lineNoOne.concat(
      ' ',
      address.lineNoTwo,
      ' ',
      address.city,
      ' ',
      address.state,
      ' ',
      address.pinCode
    );
    expect(getByText(completeAddress)).toBeTruthy();
  });

  function getAddress() {
    return {
      lineNoOne: 'C/001',
      lineNoTwo: 'Parker Street',
      city: 'Pune',
      state: 'Maharashtra',
      pinCode: '400192',
      country: 'India',
    };
  }
});
