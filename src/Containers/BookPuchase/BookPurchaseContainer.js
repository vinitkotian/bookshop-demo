import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookPurchase from '../../Components/BookPurchase/BookPuchase';
import OrderSummaryContainer from '../OrderSummary/OrderSummaryContainer';
import BookPurchaseApiModel from '../../Components/BookPurchase/BookPurchaseApiModel';
import BookPurchaseSuccess from '../../Components/BookPurchase/BookPurchaseSuccess';

const BookPurchaseContainer = () => {
  let navigate = useNavigate();

  let { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState(null);
  const [reqBody, setReqBody] = useState(null);
  const [success, setSuccess] = useState(false);

  const onPurchaseSubmit = async () => {
    const response = await BookPurchaseApiModel.placeBookOrder(reqBody);
    if (response.status === 200) {
      setSuccess(true);
      setOrderDetails(null);
    }
  };

  const goTohome = () => {
    setSuccess(false);
    navigate('/', { replace: true });
  };

  const showOrderSummaryPage = (data) => {
    const newState = {
      bookDetails: bookDetails,
      ...data,
    };
    setReqBody(data);
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

  if (loading) return <div className={"bookdetails-flex-ctn"}><h1>Loading...</h1></div>;

  if (success) {
    return <BookPurchaseSuccess goTohome={goTohome} />;
  }

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
