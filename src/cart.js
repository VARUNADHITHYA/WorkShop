import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Cricketrs,Nickname)
{
  return { Cricketrs,Nickname};
}

const rows = [
  createData("Virat kohli",'King'),
  createData("Rohit Saharma",'Hitman'),
  createData("Ms Dohni",'Captain cool '),
  createData("KL Rahul",'Classy'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
        <h1>CRICKET</h1>
      <Table sx={{ minWidth: 500 }} aria-label="simple table" border="2px">
        
        <TableHead>
          <TableRow>
            
            <TableCell align="center">Cricketrs</TableCell>
            <TableCell align="center">Nickname&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Cricketrs}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Cricketrs}
              </TableCell>
              {/* <TableCell align="right">{row.calories}</TableCell> */}
              <TableCell align="center">{row.Nickname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}