import React from "react";
import {render, waitFor, screen} from '@testing-library/react'
import BookDetails from "./BookDetails";
import BookModel from "../../Books/BookModel";
import {bookWithInventoryReviewNotAvailable, bookWithInventoryReviewAvailable} from "../../Books/__factory__/book-details";
import {act} from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';


describe('Book Details Test', () => {
    beforeEach(async () => {
        BookModel.fetchDetailsById = jest.fn().mockResolvedValue(bookWithInventoryReviewAvailable());
        const book = bookWithInventoryReviewAvailable();
        await act(async () => {
            await render(
                <Router>
                    <BookDetails
                        backToHomePage={jest.fn()}
                        selectedBook={book}
                    />
                </Router>
            );
        })
    })

    it('should display Book Name', async function () {
        await waitFor(() => {
            expect(BookModel.fetchDetailsById).toHaveBeenCalled();
            expect(screen.getByText('Arabian Nights : Second Edition')).toBeTruthy();
        })
    });

    it('should display Author Name', async function () {
        await waitFor(() => {
            expect(BookModel.fetchDetailsById).toHaveBeenCalled();
            expect(screen.getByText("Author Name: Sir Richard Burton")).toBeTruthy();
        })
    });

    it('should display Book Price', async function () {
        await waitFor(() => {
            expect(BookModel.fetchDetailsById).toHaveBeenCalled();
            expect(screen.getByText("Price: 700 INR")).toBeTruthy();
        })
    });

    it('should display Book reviews', async function () {
        await waitFor(() => {
            expect(BookModel.fetchDetailsById).toHaveBeenCalled();
            expect(screen.getByText("User:guest@gmail.com")).toBeTruthy();
        })
    });

    it('should display stock availability when inventory is available', async function () {
        await waitFor(() => {
            expect(BookModel.fetchDetailsById).toHaveBeenCalled();
            expect(screen.getByText("In Stock")).toBeTruthy();
        })
    });
});

describe('Test Warnings On Book Details', () => {
    beforeEach(async () => {
        BookModel.fetchDetailsById = jest.fn().mockResolvedValue(bookWithInventoryReviewNotAvailable());
        const book = bookWithInventoryReviewNotAvailable();
        await act(async () => {
            await render(
                <Router>
                    <BookDetails
                        backToHomePage={jest.fn()}
                        selectedBook={book}
                    />
                </Router>
            );
        })
    })

    it('should show out of stock warning with 0 inventory', async function () {
        await waitFor(() => {
            expect(BookModel.fetchDetailsById).toHaveBeenCalled();
            expect(screen.getByText("! Out Of Stock")).toBeTruthy();
        })
    });

    it('should no reviews warning when review list is empty', async function () {
        await waitFor(() => {
            expect(BookModel.fetchDetailsById).toHaveBeenCalled();
            expect(screen.getByText("! No reviews yet")).toBeTruthy();
        })
    });
})