import React from "react";
import { DataGrid } from '@mui/x-data-grid';

export default function BooksTable(props) {
    const books = props.books;

    const columns = [
        { field: 'bookImageUrl', headerName: 'Cover', width: 200 , renderCell: (params) => <img src={params.value} width={50} height={50}/>},
        { field: 'name', headerName: 'Name', width: 200 },
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
        <div style={{ height:700, width: '100%' }}>
            <DataGrid
                rows={getRows()}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
            />
        </div>
    );
}