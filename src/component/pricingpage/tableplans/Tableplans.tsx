import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Button, Divider, Typography } from "@mui/material";

function Tableplans() {
  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }

  const rows = [
    createData("Feature text goes here", 10, 25, "unlimited"),
    createData(
      "Feature text goes here",
      <CheckIcon></CheckIcon>,
      <CheckIcon></CheckIcon>,
      <CheckIcon></CheckIcon>
    ),
    createData(
      "Feature text goes here",
      <CheckIcon></CheckIcon>,
      <CheckIcon></CheckIcon>,
      <CheckIcon></CheckIcon>
    ),
    createData(
      "Feature text goes here",
      "",
      <CheckIcon></CheckIcon>,
      <CheckIcon></CheckIcon>
    ),
    createData("Feature text goes here", "", "", <CheckIcon></CheckIcon>),
  ];
  return (
    <div>
      {" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">
                <Box>
                  <Typography>Basic</Typography>
                  <Typography>Lorem ipsum dolor sit amet</Typography>
                  <Button variant="contained">Get started</Button>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Box>
                  <Typography>Business</Typography>
                  <Typography>Lorem ipsum dolor sit amet</Typography>
                  <Button variant="contained">Get started</Button>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Box>
                  <Typography>Enterprise</Typography>
                  <Typography>Lorem ipsum dolor sit amet</Typography>
                  <Button variant="contained">Get started</Button>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableHead>
            <TableRow>
              <TableCell>Feature Category</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          
          <Divider/>

          <TableHead>
            <TableRow>
              <TableCell>Feature Category</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          <Divider/>

          <TableHead>
            <TableRow>
              <TableCell>Feature Category</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tableplans;
