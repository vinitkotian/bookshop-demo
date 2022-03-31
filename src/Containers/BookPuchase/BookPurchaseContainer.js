import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookPurchase from '../../Components/BookPurchase/BookPuchase';
import OrderSummaryContainer from '../OrderSummary/OrderSummaryContainer';
import BookPurchaseApiModel from '../../Components/BookPurchase/BookPurchaseApiModel';

const BookPurchaseContainer = () => {
  let history = useNavigate();
  let { bookId } = useParams();

  const [bookDetails, setBookDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState(null);

  const onPurchaseSubmit = async (body) => {
    const response = await BookPurchaseApiModel.placeBookOrder(body);
    if (response.status === 200) {
      const orderId = response.data.id;
      history(`/order/summary/${orderId}`);
    }
  };

  const showOrderSummaryPage = (data) => {
    const newState = {
      bookDetails: bookDetails,
      ...data,
    };
    setOrderDetails(newState);
  };

  useEffect(() => {
    const getBookData = async () => {
      const response = await BookPurchaseApiModel.getBookDetailByBookId(bookId);
      if (response.status === 200) {
        setBookDetails(response.data);
        setLoading(false);
      }
    };
    getBookData();
  }, [bookId]);

  if (loading) return <h1>loading</h1>;

  if (orderDetails) {
    return (
      <OrderSummaryContainer
        onSubmit={onPurchaseSubmit}
        orderDetails={orderDetails}
      />
    );
  }

  return (
    <BookPurchase bookDetails={bookDetails} onSubmit={showOrderSummaryPage} />
  );
};
export default BookPurchaseContainer;
