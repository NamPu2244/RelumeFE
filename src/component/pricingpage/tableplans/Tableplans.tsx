import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import {
  Box,
  Button,
  createTheme,
  Divider,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { dataTableCompare } from "../../../data/dataplans/datacompare";
import { useMemo } from "react";

function Tableplans() {
  {
    dataTableCompare.map((row) =>
      row.rowData.map((data) => console.log(data.enterprise))
    );
  }

  const theme = createTheme({
    palette: {
      black: {
        main: "#212121",
        contrastText: "#fff",
      },
    },
    typography: {
      h2: {
        fontSize: 48,
        fontWeight: "bold",
      },
      subtitle1: {
        fontSize: 18,
      },
    },
  });

  return (
    <div>
      {" "}
      <ThemeProvider theme={theme}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">
                  <Box sx={{ textAlign: "center" ,my:4 , mx:3 }}>
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h6">Basic</Typography>
                    </Box>
                    <Box sx={{ mb: 8 }}>
                      <Typography variant="subtitle1">Lorem ipsum dolor sit amet</Typography>
                    </Box>
                    <Box>
                      <Button variant="contained" size="medium" color="black" style={{width:"100%"}}>Get started</Button>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Box sx={{ textAlign: "center" ,my:4 , mx:3 }}>
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h6">Business</Typography>
                    </Box>
                    <Box sx={{ mb: 8 }}>
                      <Typography variant="subtitle1">Lorem ipsum dolor sit amet</Typography>
                    </Box>
                    <Box>
                      <Button variant="contained" size="medium" color="black" style={{width:"100%"}}>Get started</Button>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Box sx={{ textAlign: "center" ,my:4 , mx:3 }}>
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h6">Enterprise</Typography>
                    </Box>
                    <Box sx={{ mb: 8 }}>
                      <Typography variant="subtitle1">Lorem ipsum dolor sit amet</Typography>
                    </Box>
                    <Box>
                      <Button variant="contained" size="medium" color="black" style={{width:"100%"}}>Get started</Button>
                    </Box>
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
                      <TableCell align="right">
                        <Box sx={{ textAlign: "center" }}>{data.basic}</Box>
                      </TableCell>
                      <TableCell align="right">
                        <Box sx={{ textAlign: "center" }}>{data.business}</Box>
                      </TableCell>
                      <TableCell align="right">
                        <Box sx={{ textAlign: "center" }}>
                          {data.enterprise}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </div>
  );
}

export default Tableplans;
