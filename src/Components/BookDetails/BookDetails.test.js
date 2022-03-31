import React from "react";
import { bookWithInventoryReviewAvailable} from "../../BooksModel/__factory__/book-details";
import {render} from "@testing-library/react";
import BookDetails from "./BookDetails";


describe('Book Details Test', () => {

    it('should display Book Name', async function () {
        const bookDetails = bookWithInventoryReviewAvailable();
        const { getByText } = render(
            <BookDetails
                bookDetails = {bookDetails}
            />
        );
        expect(getByText('Arabian Nights : Second Edition')).toBeTruthy();
    });

    it('should display Author Name', async function () {
        const bookDetails = bookWithInventoryReviewAvailable();
        const { getByText } = render(
            <BookDetails
                bookDetails = {bookDetails}
            />
        );
        expect(getByText("Author Name: Sir Richard Burton")).toBeTruthy();
    });

    it('should display Book Price', async function () {
        const bookDetails = bookWithInventoryReviewAvailable();
        const { getByText } = render(
            <BookDetails
                bookDetails = {bookDetails}
            />
        );
        expect(getByText("Price: 700 INR")).toBeTruthy();
    });
});