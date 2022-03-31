import React from 'react';

export default function BookDetails({ bookDetails, quantity }) {
  return (
    <div>
      <span>Book Name:</span> <span>{bookDetails.name}</span>&nbsp;
      <span>Author Name:</span> <span>{bookDetails.authorName}</span>&nbsp;
      <span>Quantity:</span> <span>{quantity}</span>&nbsp;
      <span>Price:</span>{' '}
      <span>
        {bookDetails.price.amount} {bookDetails.price.currency}{' '}
      </span>
      &nbsp;
    </div>
  );
}
