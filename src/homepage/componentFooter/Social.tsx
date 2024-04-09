import { Box } from '@mui/material'
import React from 'react'
import facebook from "/Img/Social/Facebook.svg";
import ig from "/Img/Social/Ig.svg";
import x from '/Img/Social/X.svg';
import linkin from "/Img/Social/In.svg";



function Social() {
  return (
    <div>
        
      <Box sx={{ display: "flex", gap: 2 }}>
        <img src={facebook}/>
        <img src={ig}/>
        <img src={x}/>
        <img src={linkin}/>
      </Box>
    </div>
  )
}

export default Social