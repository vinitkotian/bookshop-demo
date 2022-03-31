import {
    bookWithInventoryReviewAvailable,
    bookWithInventoryReviewNotAvailable
} from "../../BooksModel/__factory__/book-details";
import StockDetails from "./StockDetails";
import {render} from "@testing-library/react";
import React from "react";

describe('StockDetailsTest', () => {

    it('should show in stock warning with 0 inventory', async function () {
        const bookDetails = bookWithInventoryReviewAvailable();
        const {getByText} = render(
            <StockDetails
                bookDetails={bookDetails}
            />
        )
        expect(getByText("In Stock")).toBeTruthy();
    });

    it('should show out of stock warning available inventory', async function () {
        const bookDetails = bookWithInventoryReviewNotAvailable();
        const {getByText} = render(
            <StockDetails
                bookDetails={bookDetails}
            />
        )
        expect(getByText("! Out Of Stock")).toBeTruthy();
    });


})