import { render, screen } from '@testing-library/react';
import React from 'react';
import labels from '../../Config/labels';
import BookPurchaseAddress from './BookPurchaseAddress';

describe('Address in the Purchase', () => {
  const onChangeInput = jest.fn();
  it('should have addressLine 1 as a label', async function () {
    render(<BookPurchaseAddress onChangeInput={onChangeInput} />);
    const addressLine1 = screen.getByText(labels.bookPurchase.addressLineOne);
    expect(addressLine1).toBeInTheDocument();
  });

  it('should have addressLine 2 as a label', async function () {
    render(<BookPurchaseAddress onChangeInput={onChangeInput} />);
    const addressLine2 = screen.getByText(labels.bookPurchase.addressLineTwo);
    expect(addressLine2).toBeInTheDocument();
  });

  it('should have City as a label', async function () {
    render(<BookPurchaseAddress onChangeInput={onChangeInput} />);
    const city = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === 'label' &&
        content.startsWith(labels.bookPurchase.city)
      );
    });
    expect(city).toBeInTheDocument();
  });

  it('should have State as a label', async function () {
    render(<BookPurchaseAddress onChangeInput={onChangeInput} />);
    const state = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === 'label' &&
        content.startsWith(labels.bookPurchase.state)
      );
    });
    expect(state).toBeInTheDocument();
  });

  it('should have pincode as a label', async function () {
    render(<BookPurchaseAddress onChangeInput={onChangeInput} />);
    const pincode = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === 'label' &&
        content.startsWith(labels.bookPurchase.pincode)
      );
    });
    expect(pincode).toBeInTheDocument();
  });
});
