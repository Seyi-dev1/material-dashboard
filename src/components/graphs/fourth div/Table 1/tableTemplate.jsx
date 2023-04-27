import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './tableTemplate.scss'

function createData(InvoiceId, category, price, status) {
  return {InvoiceId, category, price, status };
}

const rows = [
  createData('INV-1680885180247', 'Android', '$35', 'Success'),
  createData('INV-1680885180251', 'Mac', "$27", 'Pending'),
  createData('INV-1680885180249', 'Windows', '$16', 'Declined'),
  createData('INV-1680885180248', 'Android', '$50', 'Success'),
  createData('INV-1680885180250', 'Mac', '$19', 'Pending'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} style={{boxShadow:'none', borderBottom:'1px solid rgb(235, 232, 232)', borderRadius:'0px'}} className='Table'>
      <Table sx={{ minWidth: 650, height:500 }} aria-label="simple table">
        <TableHead style={{backgroundColor:'rgb(239, 251, 252)'}} sx={{height:'100px'}}>
          <TableRow>
            <TableCell sx={{ fontSize: 18, fontWeight:'bold', fontFamily:'inherit', width:'200px', border:'none' }} align='center'>Invoice ID</TableCell>
            <TableCell sx={{ fontSize: 18, fontWeight:'bold', fontFamily:'inherit', border:'none' }} align="center">Category</TableCell>
            <TableCell sx={{ fontSize: 18, fontWeight:'bold', fontFamily:'inherit', border:'none' }} align="center">Price</TableCell>
            <TableCell sx={{ fontSize: 18, fontWeight:'bold', fontFamily:'inherit', border:'none' }} align="center">Status</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: '0' } }}
            >
              <TableCell component="th" scope="row"  sx={{ fontSize: 18, fontFamily:'inherit', border:'none' }} align='right'>
                {row.InvoiceId}
              </TableCell>
              <TableCell sx={{ fontSize: 18, fontFamily:'inherit', border:'none' }} align="center">{row.category}</TableCell>
              <TableCell sx={{ fontSize: 18, fontFamily:'inherit', border:'none' }} align="center">{row.price}</TableCell>
              <TableCell sx={{ fontSize: 18, fontFamily:'inherit', border:'none' }} align="center"><span className={`status  ${row.status}`} >{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
