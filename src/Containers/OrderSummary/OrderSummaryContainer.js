import React from 'react';
import OrderSummaryBookDetails from '../../Components/OrderSummary/OrderSummaryBookDetails';
import OrderSummaryAddress from '../../Components/OrderSummary/OrderSummaryAddress';

export default class OrderSummaryContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      order: {},
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div data-testid="order-summary-container">
        <div>Order Summary</div>
        <OrderSummaryBookDetails data={this.getBook()} />
        <OrderSummaryAddress data={this.getAddress()} />
      </div>
    );
  }

  getBook = () => {
    return {
      name: 'Java by Sam',
      authorName: 'Danish Lilly',
      quantity: 2,
      price: {
        currency: 'INR',
        amount: 1000.28,
      },
    };
  };

  getAddress = () => {
    return {
      lineNoOne: 'C/001',
      lineNoTwo: 'Parker Street',
      city: 'Pune',
      state: 'Maharashtra',
      pinCode: '400192',
      country: 'India',
    };
  };
}
