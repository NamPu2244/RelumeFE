import React from "react";
import highlight from "/Img/Highlight/Vector.svg";
import divider from "/Img/Highlight/Divider.svg";
import { Box, Typography } from "@mui/material";

function Shortsum() {
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
          <Typography>
            <div>Short summary of step one</div>
          </Typography>

          <Typography>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </div>
          </Typography>
        </div>
      </Box>
    </div>
  );
}

export default Shortsum;
