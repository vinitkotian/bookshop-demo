import React from "react";
import BookReviews from "../BookReviews/BookReviews";
import StockDetails from "../StockDetails/StockDetails";

export default function BookDetails(props){
    const bookDetails = props.bookDetails;

    return (
        <div className={"book-details-row-ctn"}>
            <div className={"book-image-col"}>
                <img
                    src={bookDetails.bookImageUrl} style={{width: 400, height: 600}}/>
            </div>
            <div className={"book-details-col"}>
                <h1>{bookDetails.name}</h1>
                <h2>{`Author Name: ${bookDetails.authorName}`}</h2>
                <h2>{`Price: ${bookDetails.price.amount} ${bookDetails.price.currency}`}</h2>
                <StockDetails
                    bookDetails = {bookDetails}
                />
                <BookReviews
                    bookDetails = {bookDetails}
                />
            </div>
        </div>
    )
}