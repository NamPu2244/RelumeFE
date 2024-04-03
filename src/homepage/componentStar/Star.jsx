import React from "react";
import star from "/Img/Highlight/Stars.svg";
import avatar from "/Img/Highlight/Avatar Image.svg";
import webflow from "/Img/Highlight/Black.svg";
import { Box, Typography } from "@mui/material";
import Contentimg from "../componentHeader/Contentimg";

function Star() {
  return (
    <div>
      <img src={star} />

      <Typography>
        <div>
          "A customer testimonial that highlights features and answers potential
          customer doubts about your product or service. Showcase testimonials
          from a similar demographic to your customers."
        </div>
      </Typography>

      <div>

        <Box sx={{display:'flex'}}>
           <div>
          <Box sx={{ borderRight: 1, boxSizing: "border-box" }}>
            {" "}
            {/* Add box-sizing */}
            <div>
              <img src={avatar} />
            </div>
            <div>
              <Typography>Customer Name</Typography>
              <Typography>Position, Company name</Typography>
            </div>
          </Box>
        </div>

        <div>
          <img src={webflow} />
        </div> 
        </Box>
        
      </div>
    </div>
  );
}

export default Star;
