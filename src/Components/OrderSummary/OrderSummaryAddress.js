import * as React from 'react';
import labels from '../../Config/labels';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Address({ address }) {
  const createData = (name, value) => {
    return { name, value };
  };
  const completeAddress = address.lineNoOne.concat(
    ' ',
    address.lineNoTwo,
    ' ',
    address.city,
    ' ',
    address.state,
    ' ',
    address.pinCode
  );

  const rows = [
    createData(labels.orderSummaryAddress.shippingAddress, completeAddress),
    createData(labels.orderSummaryAddress.shippingCountry, address.country),
  ];
  return (
    <>
      <h3 align={'center'}>{labels.orderSummary.deliveryDetails}</h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: '17px', fontWeight: 'bold' }}
                >
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <span>Address Line 1:</span> <span>{address.lineNoOne}</span>
        <span>Address Line 2:</span> <span>{address.lineNoTwo}</span>
        <span>City:</span> <span>{address.city}</span>
        <span>State:</span> <span>{address.state}</span>
        <span>PIN Code:</span> <span>{address.pinCode}</span>
        <span>Country:</span> <span>{address.country}</span>
      </div>
    </>
  );
}
