import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './template.scss'
import rowsers from './data';
// function createData(Seller, Product, Country, Total, Rank, image) {
//   return {Seller, Product, Country, Total, Rank, image };
// }

const rows = rowsers

export default function Template() {
  return (
    <TableContainer component={Paper} style={{boxShadow:'none', borderBottom:'1px solid rgb(235, 232, 232)', borderRadius:'0px'}} className='Table'>
      <Table sx={{ minWidth: 700, height:500 }} aria-label="simple table">
        <TableHead style={{backgroundColor:'rgb(229, 232, 230)', color:'grey'}} sx={{height:window.innerWidth<=540?50:100}}>
          <TableRow>
            <TableCell sx={{ fontSize: window.innerWidth<=540?13:18, fontWeight:'bold', fontFamily:'inherit', width:'200px', color:'rgb(106, 107, 107)', border:'none' }} align='left'>Seller</TableCell>
            <TableCell sx={{ fontSize: window.innerWidth<=540?13:18, fontWeight:'bold', fontFamily:'inherit', border:'none', color:'rgb(106, 107, 107)' }} align="center">Product</TableCell>
            <TableCell sx={{ fontSize: window.innerWidth<=540?13:18, fontWeight:'bold', fontFamily:'inherit', border:'none', color:'rgb(106, 107, 107)' }} align="center">Country</TableCell>
            <TableCell sx={{ fontSize: window.innerWidth<=540?13:18, fontWeight:'bold', fontFamily:'inherit', border:'none', color:'rgb(106, 107, 107)' }} align="center">Total</TableCell>
            <TableCell sx={{ fontSize: window.innerWidth<=540?13:18, fontWeight:'bold', fontFamily:'inherit', border:'none', color:'rgb(106, 107, 107)' }} align="center">Rank</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: '0' } }}
            >
              <TableCell component="th" scope="row"  sx={{ fontSize: window.innerWidth<=540?13:18, fontFamily:'inherit', border:'none' }} align='left'>
                <div style={{display:'flex', alignItems:'center', gap:'1.5rem'}}>
                  <img width='40px' style={{borderRadius:'50%'}} src={row.person} alt="" />
                  {row.customer}
                </div>
              </TableCell>
              <TableCell sx={{ fontSize: window.innerWidth<=540?13:18, fontFamily:'inherit', border:'none' }} align="center">{row.product}</TableCell>
              <TableCell sx={{ fontSize: window.innerWidth<=540?13:18, fontFamily:'inherit', border:'none' }} align="center"><img src={row.country} width='40px' alt="" /></TableCell>
              <TableCell sx={{ fontSize: window.innerWidth<=540?13:18, fontFamily:'inherit', border:'none' }} align="center">{row.amount}</TableCell>
              <TableCell sx={{ fontSize: window.innerWidth<=540?13:18, fontFamily:'inherit', border:'none' }} align="center"><div className={`ranks ${row.rank}`}>{row.rank}</div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
