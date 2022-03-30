import React from "react";
import {render, waitFor, screen, fireEvent} from '@testing-library/react'
import ListBooksContainer from "./ListBooksContainer";
import BookModel from "./BookModel";
import booksFactory from "./__factory__/books-factory";
import userEvent from '@testing-library/user-event';

jest.mock('./BookModel')

describe('ListBooks', () => {
    beforeEach(() => {
        BookModel.fetchAll = jest.fn().mockResolvedValue(booksFactory());
    });

    it('should fetch the books', async function () {
        const { getByText } = render(<ListBooksContainer/>);

        await waitFor(() => {
            // expect(BookModel.fetchAll).toHaveBeenCalled();
            expect(getByText('Malcom Gladwell')).toBeInTheDocument();
        })
    });

    it('should render the app bar with search', async function () {
        const { getByText } = render(<ListBooksContainer/>);
        expect(getByText('ThoughtWorks Book Shop')).toBeTruthy();
        expect(screen.getByPlaceholderText('Search…')).toBeTruthy();
    });

    // it('validate search input', async function () {
    //     render(<ListBooksContainer/>);
    //     const searchInput = screen.getByPlaceholderText('Search…');
    //     fireEvent.change(searchInput, {target: {value: 'Harry'}});
    //     expect(searchInput.value).toBe('Harry')
    // });
})