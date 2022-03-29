import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import BookDetails from "./BookDetails";

export default function BooksTable(props) {
    const books = props.books;
    const [selectedBook,setSelectedBook] = React.useState("");

    const selectBook = (book)=>{
        setSelectedBook(book);
        props.openBookDetailsView();
    }

    const columns = [
        { field: 'bookImageUrl', headerName: 'Cover', width: 200 , renderCell: (params) => <img src={params.value} width={50} height={50}/>},
        { field: 'name', headerName: 'Title', width: 200 },
        { field: 'authorName', headerName: 'Author', width: 200 },
        { field: 'price', headerName: 'Price', width: 200 }
    ];

    function getRows(){
        const rows = [];
        books.map((book) => {
            const bookTemp = new Object();
            bookTemp.id = book.id;
            bookTemp.bookImageUrl = book.bookImageUrl;
            bookTemp.name = book.name;
            bookTemp.authorName = book.authorName;
            bookTemp.price = book.price.amount;
            rows.push(bookTemp);
        })
        return rows;
    }

    return (
        !props.isBookDetailsOpen ?
        <div style={{ height:700, width: '100%' }}>
            <DataGrid
                rows={getRows()}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                onCellClick={(params, event) => {
                    selectBook(params.row);
                    event.defaultMuiPrevented = true;
                }}
            />
        </div>
        :
    <BookDetails
        backToHomePage = {props.backToHomePage}
        selectedBook = {selectedBook}
    />

    )
}