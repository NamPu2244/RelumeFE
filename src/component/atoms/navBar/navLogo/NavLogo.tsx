import React from 'react'
import { Box } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom'

function NavLogo() {

    const navigate = useNavigate();
    const homePage = () => {
      navigate("/")
    }
  return (
    <Box sx={{cursor:'pointer'}}><a onClick={homePage}>Navlogo</a></Box>
  )
}

export default NavLogo