import React from 'react';
import { useParams } from 'react-router-dom';

const BookPurchaseContainer = () => {
  let { bookId } = useParams();
  return <h1>hello Book Id : {bookId}</h1>;
};
export default BookPurchaseContainer;
