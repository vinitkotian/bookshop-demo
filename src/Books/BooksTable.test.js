import React from "react";
import {render} from '@testing-library/react'
import BooksTable from "./BooksTable";

describe('BooksTable', () => {
    it('should display only headers when there are no rows', function () {
        const { getByText } = render(<BooksTable books={[]}/>);

        expect(getByText('Title')).toBeTruthy();
        expect(getByText('Author')).toBeTruthy();
        // expect(getByText('price')).toBeTruthy();
    });

    it('should display single book when there is a book', function () {
        const { getByText } = render(<BooksTable books={[books()[0]]}/>);

        expect(getByText('Malcom Gladwell')).toBeTruthy();
        expect(getByText('Outliers')).toBeTruthy();
        // expect(getByText('200')).toBeTruthy();
    });

    it('should display multiple rowhen there is a book', function () {
        const { getByText } = render(<BooksTable books={books()}/>);

        expect(getByText('Malcom Gladwell')).toBeTruthy();
        expect(getByText('J K Rowling')).toBeTruthy();
    });

    it('should Loading... when book is selected', function () {
        const { getByText } = render(<BooksTable
            books={books()}
            openBookDetailsView = {jest.fn()}
            isBookDetailsOpen = {true}
            backToHomePage = {jest.fn()}/>);

        expect(getByText('Loading...')).toBeTruthy();
    });

    function books() {
        return [{id: 1, name: "Malcom Gladwell", authorName: "Outliers", price: {currency: 'INR', amount: 200}},
            {id: 2, name: "J K Rowling", authorName: "Harry Potter", price : {currency: 'INR', amount: 200}}];
    }
})