// import React from "react";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import { createTheme, ThemeProvider } from "@mui/material";
// import datapro from "../../../data/dataplans/datapro";

// function Buttonplans(props) {
//   const theme = createTheme({
//     palette: {
//       black: {
//         main: "#212121",
//         contrastText: "#fff",
//       },
//     },
//     typography: {
//       subtitle1: {
//         fontSize: 18,
//       },
//     },
//   });

//   const orPrices = datapro.map((row) => row.orprice);
//   const Prices = datapro.map((row) => row.price);

//   const [alignment, setAlignment] = React.useState({Prices});

//   const handleChange = (event, newAlignment) => {
//     setAlignment(newAlignment);
//     console.log(newAlignment);
//   };


//   return (
//     <div>
//       {" "}
//       <ThemeProvider theme={theme}>
//         <div>
//           <ToggleButtonGroup
//             onChange={handleChange}
//             exclusive
//             value={alignment}
//             color="primary"
//             aria-label="Platform"
//           >
//             <ToggleButton value={Prices}>Monthly</ToggleButton>
//             <ToggleButton value={orPrices}>Yearly</ToggleButton>
//           </ToggleButtonGroup>
//         </div>
//       </ThemeProvider>
//     </div>
//   );
// }

// export default Buttonplans;
