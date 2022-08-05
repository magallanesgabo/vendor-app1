import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const TableReport = () => {
  const [tickets, setTickets] = useState([]);
  const token = localStorage.getItem('toke');

  const getTicketData = async () => {
    try {
      const data = await axios.get(
        "https://api.devrudolf.com/vendors/ticket-scanned",       
        {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
      );
      console.log(data.data);
      setTickets(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTicketData();
  }, []);
  return (
    <div className="App">
        {tickets.map((tickets) => {
          return (
            <p>
              {tickets.name} - {tickets.price} - {tickets.created_at}
            </p>
          );
        })} 
    
    {/*<TableContainer>
          <Table sx={{ minWidth: 200 }} aria-label="caption table">
              <TableHead>
                  <TableRow style={{fontWeigth: 'Large', fontHeigth: '40px' }}>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Hour</TableCell>
              </TableRow>
              </TableHead>
        <TableBody>
        {product.map((item) => {
          return (
            <TableRow style={{ boxShadow: 'no', border: 'none' }} key={item.id}>
                <TableCell align="center" component="th" scope="row">{item.brand}</TableCell>
                <TableCell align="center">{item.product_type}</TableCell>
                <TableCell align="center">{item.created_at}</TableCell>
            </TableRow>
          );
        })}

        </TableBody>
      </Table>
      </TableContainer>*/}
    </div>
  );
};

export default TableReport;