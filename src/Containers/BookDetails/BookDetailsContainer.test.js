import React from "react";
import {render, waitFor, screen} from '@testing-library/react'
import BookDetailsContainer from "./BookDetailsContainer";
import BookModel from "../../BooksModel/BookModel";
import {bookWithInventoryReviewNotAvailable, bookWithInventoryReviewAvailable} from "../../BooksModel/__factory__/book-details";
import {act} from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';


describe('Book Details Container Test', () => {
    beforeEach(async () => {
        BookModel.fetchDetailsById = jest.fn().mockResolvedValue(bookWithInventoryReviewAvailable());
        const book = bookWithInventoryReviewAvailable();
        await act(async () => {
            await render(
                <Router>
                    <BookDetailsContainer
                        backToHomePage={jest.fn()}
                        selectedBook={book}
                    />
                </Router>
            );
        })
    })

    it('should display book details when async call resolves', async function () {
        await waitFor(() => {
            expect(BookModel.fetchDetailsById).toHaveBeenCalled();
            expect(screen.getByText('Arabian Nights : Second Edition')).toBeTruthy();
            expect(screen.getByText("Author Name: Sir Richard Burton")).toBeTruthy();
            expect(screen.getByText("Price: 700 INR")).toBeTruthy();
        })
    });
});
