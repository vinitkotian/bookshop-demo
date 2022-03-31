import {
    bookWithInventoryReviewAvailable,
    bookWithInventoryReviewNotAvailable
} from "../../Books/__factory__/book-details";
import {render} from "@testing-library/react";
import React from "react";
import BookReviews from "./BookReviews";
import StockDetails from "../StockDetails/StockDetails";

describe("BookReviewsTest",()=>{
    it('should display no reviews warning when review list is empty',  function () {
        const bookDetails = bookWithInventoryReviewNotAvailable();
        const {getByText} = render(
            <BookReviews
                bookDetails={bookDetails}
            />
        )
        expect(getByText("! No reviews yet")).toBeTruthy();
    });

    it('should display review username',  function () {
        const bookDetails = bookWithInventoryReviewAvailable();
        const { getByText } = render(
            <BookReviews
                bookDetails = {bookDetails}
            />
        );
        expect(getByText("User:guest@gmail.com")).toBeTruthy();
    });
})


