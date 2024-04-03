import { Box, Typography } from '@mui/material'
import React from 'react'
import webflow from "/Img/Highlight/Black.svg";
import relume from "/Img/Highlight/Relume.svg";

function Social() {
  return (
    <div>
        <Typography>
        Trusted by the world's best companies [social proof to build credibility]
        </Typography>

        <div>
            <Box sx={{display:'flex', justifyContent:'center' , gap:15}}>
                <img src={webflow}/>
                <img src={relume}/>
                <img src={webflow}/>
                <img src={relume}/>
                <img src={webflow}/>
                <img src={relume}/>
            </Box>
        </div>
    </div>
  )
}

export default Social