import { Box } from '@mui/material';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Navlogo() {
  const navigate = useNavigate();
  const homePage = () => {
    navigate("/")
  }
  return (
    <Box sx={{cursor:'pointer'}}><a onClick={homePage}>Navlogo</a></Box>
  )
}

export default Navlogo