import { Typography } from '@mui/material';
import React from 'react';
import labels from '../../Config/labels';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import constants from '../../Config/constants';

export default function OrderSummaryBookDetails({ bookDetails, quantity }) {
  const createData = (bookName, noOfCopies, unitPrice) => {
    return { bookName, noOfCopies, unitPrice };
  };
  const rows = [
    createData(
      bookDetails.name,
      quantity,
      constants.currency.INR + ' ' + bookDetails.price.amount
    ),
  ];
  return (
    <>
      <Typography variant="h5" align={'center'} sx={{ marginTop: '25px' }}>
        {labels.orderSummary.orderDetails}
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: '15px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{labels.orderSummaryBookDetails.table.slNo}</TableCell>
              <TableCell>
                {labels.orderSummaryBookDetails.table.bookName}
              </TableCell>
              <TableCell>
                {labels.orderSummaryBookDetails.table.noOfCopies}
              </TableCell>
              <TableCell>
                {labels.orderSummaryBookDetails.table.unitPrice}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={row.bookName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{i + 1}</TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: '17px', fontWeight: 'bold' }}
                >
                  {row.bookName}
                </TableCell>
                <TableCell align="left">{row.noOfCopies}</TableCell>
                <TableCell align="left">{row.unitPrice}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={2}></TableCell>
              <TableCell>
                {labels.orderSummaryBookDetails.table.shippingCost}
              </TableCell>
              <TableCell>
                {constants.currency.INR} {constants.deliveryCost}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}></TableCell>
              <TableCell>
                {labels.orderSummaryBookDetails.table.totalCost}
              </TableCell>
              <TableCell>
                {constants.currency.INR}{' '}
                {quantity * bookDetails.price.amount + constants.deliveryCost}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
