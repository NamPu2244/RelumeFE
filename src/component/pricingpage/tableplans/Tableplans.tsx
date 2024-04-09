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
import { dataTableCompare } from "../../../data/dataplans/datacompare";
import { useMemo } from "react";

function Tableplans() {
  {
    dataTableCompare.map((row) =>
      row.rowData.map((data) => console.log(data.enterprise))
    );
  }

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

          <TableBody>
            {dataTableCompare.map((row) => (
              <React.Fragment key={row.categoryName}>
                <TableRow>
                  <TableCell colSpan={4}>{row.categoryName}</TableCell>
                </TableRow>
                {row.rowData.map((data) => (
                  <TableRow key={data.featureName}>
                    <TableCell>{data.featureName}</TableCell>
                    <TableCell align="right">{data.basic}</TableCell>
                    <TableCell align="right">{data.business}</TableCell>
                    <TableCell align="right">{data.enterprise}</TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tableplans;
