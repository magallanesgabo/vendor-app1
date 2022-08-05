import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { Badge, Chip, Stack } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export default function AcccessibleTable({data}) {


  const best_beer = data.filter(resp => resp.Question.includes("Best Beer")) || false

  const best_ribs = data.filter(resp => resp.Question.includes("Best Ribs")) || false

  const best_hand_held = data.filter(resp => resp.Question.includes("Best Hand-Held")) || false

  const best_team = data.filter(resp => resp.Question.includes("Best Team")) || false

  const best_fort = data.filter(resp => resp.Question.includes("Best fort")) || false
  
  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow style={{fontWeigth: 'Large', fontHeigth: '40px' }}>
            <StyledTableCell>Question</StyledTableCell>
            <StyledTableCell>Answers</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow style={{ boxShadow: 'no', border: 'none' }}>
              <TableCell component="th" scope="row">
                Best Ribs
              </TableCell>
              <TableCell>
              {best_beer.map((row, i) => (

                row.Answers.sort((a, b) => b[1] - a[1]).map((ans, i) => (
                  <Stack direction="row" pt={1} key={i}>
                    <Badge badgeContent={ans.Responses} color="secondary">
                      <Chip label={ans.Answer} variant="outlined"   />
                    </Badge>
                  </Stack>
                  
                ))

              ))}
              </TableCell>
            </TableRow>
            <TableRow style={{ boxShadow: 'no', border: 'none' }}>
              <TableCell component="th" scope="row">
                Best Ribs
              </TableCell>
              <TableCell>
              {best_ribs.map((row, i) => (

                row.Answers.sort((a, b) => b[1] - a[1]).map((ans, i) => (
                  <Stack direction="row" pt={1} key={i}>
                    <Badge badgeContent={ans.Responses} color="secondary">
                      <Chip label={ans.Answer}  variant="outlined"   />
                    </Badge>
                  </Stack>
                  
                ))

              ))}
              </TableCell>
            </TableRow>
            <TableRow style={{ boxShadow: 'no', border: 'none' }}>
              <TableCell component="th" scope="row">
                Best Hand-Held
              </TableCell>
              <TableCell>
              {best_hand_held.map((row, i) => (

                row.Answers.sort((a, b) => b[1] - a[1]).map((ans, i) => (
                  <Stack direction="row" pt={1} key={i}>
                    <Badge badgeContent={ans.Responses} color="secondary">
                      <Chip label={ans.Answer} variant="outlined"   />
                    </Badge>
                  </Stack>
                  
                ))

              ))}
              </TableCell>
            </TableRow>
            <TableRow style={{ boxShadow: 'no', border: 'none' }}>
              <TableCell component="th" scope="row">
                Best Team
              </TableCell>
              <TableCell>
              {best_team.map((row, i) => (

                row.Answers.sort((a, b) => b[1] - a[1]).map((ans, i) => (
                  <Stack direction="row" pt={1} key={i}>
                    <Badge badgeContent={ans.Responses} color="secondary">
                      <Chip label={ans.Answer} variant="outlined"   />
                    </Badge>
                  </Stack>
                  
                ))

              ))}
              </TableCell>
            </TableRow>
            <TableRow style={{ boxShadow: 'no', border: 'none' }}>
              <TableCell component="th" scope="row">
                Best Fort
              </TableCell>
              <TableCell>
              {best_fort.map((row) => (

                row.Answers.sort((a, b) => b[1] - a[1]).map((ans, i) => (
                  <Stack direction="row" pt={1} key={i}>
                    <Badge badgeContent={ans.Responses} color="secondary">
                      <Chip label={ans.Answer} variant="outlined"   />
                    </Badge>
                  </Stack>
                  
                ))

              ))}
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}