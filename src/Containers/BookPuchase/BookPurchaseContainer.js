import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookPurchase from '../../Components/BookPurchase/BookPuchase';
import httpService from '../../Utils/httpService';
import OrderSummaryContainer from '../OrderSummary/OrderSummaryContainer';

const BookPurchaseContainer = () => {
  let history = useNavigate();
  let { bookId } = useParams();

  const [bookDetails, setBookDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [orderSummaryData, setOrderSummaryData] = useState(null);

  const onPurchaseSubmit = async (body) => {
    const url = '/orders/place-order';
    const response = await httpService().post(url, body);
    if (response.status === 200) {
      const orderId = response.data.id;
      history(`/order/summary/${orderId}`);
    }
  };

  const showSummaryPage = (data) => {
    setOrderSummaryData(data);
  };

  useEffect(() => {
    const getBookData = async () => {
      const url = `/book/${bookId}`;
      const response = await httpService().get(url);
      if (response.status === 200) {
        setBookDetails(response.data);
        setLoading(false);
      }
    };
    getBookData();
  }, [bookId]);

  if (loading) return <h1>loading</h1>;

  if (orderSummaryData) {
    return (
      <OrderSummaryContainer
        onSubmit={onPurchaseSubmit}
        orderSummaryData={orderSummaryData}
      />
    );
  }

  return <BookPurchase bookDetails={bookDetails} onSubmit={showSummaryPage} />;
};
export default BookPurchaseContainer;
