import * as React from 'react';
import labels from '../../Config/labels';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

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
      <Typography variant="h5" align={'center'} sx={{ marginTop: '15px' }}>
        {labels.orderSummary.deliveryDetails}
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: '15px' }}>
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
    </>
  );
}
