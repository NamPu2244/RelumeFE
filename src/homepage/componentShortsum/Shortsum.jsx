import React from "react";
import highlight from "/Img/Highlight/Vector.svg";
import divider from "/Img/Highlight/Divider.svg";
import { Box, Typography } from "@mui/material";

function Shortsum(props) {

  const { shortSum } = props;

  return (
    <div>
      <Box sx={{display:'flex' , gap:5}}>
        <div>
          <div>
            <Box sx={{mb:2}}>
            <img src={highlight} />                
            </Box>

          </div>

          <div>
            <Box sx={{display:'flex' , justifyContent:'center'}}> 
                <img src={divider} />
            </Box>
            
          </div>
        </div>

        <div>
          <Typography  variant="h5">
            <div>{shortSum.Stitle}</div>
          </Typography>

          <Typography variant="body1">
            <div>
              {shortSum.Scon}
            </div>
          </Typography>
        </div>
      </Box>
    </div>
  );
}

export default Shortsum;
