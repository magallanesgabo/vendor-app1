import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

function createData( email, name, hour) {
  return { email, name, hour };
}
const token = localStorage.getItem('token');

axios({
  method: 'GET',
  url: 'https://api.devrudolf.com/vendors/ticket-scanned',
  headers: {
    'Authorization': 'Bearer ' + token, 
  },
}).then(function (response) {
  console.log(response);
});

const rows = [
  /*createData('jillyneds@me.com', 'Juan Denohin', '05:20'),
  createData('alana.cooperxx@gmail.com', 'Alan Cooper', '05:28'),
  createData('gtonellatoss1@gmail.com', 'Gerard Tonellato', '05:36')*/
];


export default function AcccessibleTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 200 }} aria-label="caption table">
        <TableHead>
          <TableRow style={{fontWeigth: 'Large', fontHeigth: '40px' }}>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Hour</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow style={{ boxShadow: 'no', border: 'none' }} key={row.name}>
              <TableCell align="center" component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.hour}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}