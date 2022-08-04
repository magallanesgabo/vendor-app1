import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const TableReport = () => {
  const [product, setProduct] = useState([]);
  const token = localStorage.getItem('token');

  const getProductData = async () => {
    try {
      const data = await axios.get(
        "https://api.devrudolf.com/vendors/ticket-scanned",       
        {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
      );
      console.log(data.data.tickets);
      product(data.data.tickets);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="App">
        {/*{product.map((item) => {
          return (
            <p>
              {item.name} - {item.price} - {item.created_at}
            </p>
          );
        })} */}

    <TableContainer>
    <Table sx={{ minWidth: 200 }} aria-label="caption table">
              <TableHead>
                  <TableRow style={{fontWeigth: 'Large', fontHeigth: '40px' }}>
                  <TableCell align="center">Total Tickets Scanned</TableCell>
              </TableRow>
              </TableHead>
        <TableBody>
        {product.map((item) => {
          return (
            <TableRow style={{ boxShadow: 'no', border: 'none' }} key={item.id}>
                <TableCell align="center" component="th" scope="row"></TableCell>
            </TableRow>
          );
        })}

        </TableBody>
      </Table>
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
                <TableCell align="center" component="th" scope="row">{item.tickets.name}</TableCell>
                <TableCell align="center">{item.product_type}</TableCell>
                <TableCell align="center">{item.created_at}</TableCell>
            </TableRow>
          );
        })}

        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default TableReport;