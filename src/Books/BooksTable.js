import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import BookDetailsContainer from '../Containers/BookDetails/BookDetailsContainer';
import { Button } from '@mui/material';
import labels from '../Config/labels';
import { useNavigate } from 'react-router-dom';

export default function BooksTable(props) {
  let history = useNavigate();

  const books = props.books;

  const columns = [
    {
      field: 'bookImageUrl',
      headerName: 'Cover',
      width: 200,
      renderCell: (params) => <img src={params.value} width={50} height={50} />,
    },
    { field: 'name', headerName: 'Title', width: 200 },
    { field: 'authorName', headerName: 'Author', width: 200 },
    { field: 'price', headerName: 'Price', width: 200 },
    {
      field: 'action',
      headerName: 'Purchase Now',
      width: 200,
      renderCell: (params) => (
        <Button
          type="submit"
          style={{ zIndex: 1, position: 'absolute' }}
          variant="contained"
          onClick={(e) => purchaseNow(params.value, e)}
        >
          {labels.bookPurchase.purchaseNow}
        </Button>
      ),
    },
  ];

  const purchaseNow = (id, e) => {
    e.stopPropagation();
    history(`/purchase/${id}`);
  };

  const openBookDetails = (params,e) =>{
    e.stopPropagation(params);
    history(`/bookDetails/${params.row.id}`);
  }


  function getRows() {
    const rows = [];
    books.map((book) => {
      const bookTemp = new Object();
      bookTemp.id = book.id;
      bookTemp.bookImageUrl = book.bookImageUrl;
      bookTemp.name = book.name;
      bookTemp.authorName = book.authorName;
      bookTemp.price = book.price.amount;
      bookTemp.action = book.id;
      rows.push(bookTemp);
    });
    return rows;
  }

  return (
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
            rows={getRows()}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            onCellClick={openBookDetails}
        />
      </div>
  )
}
