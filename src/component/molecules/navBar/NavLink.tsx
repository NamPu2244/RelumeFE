import { Box } from '@mui/material'
import React from 'react'
import LinkOne from '../../atoms/navBar/navLink/LinkOne'
import LinkTwo from '../../atoms/navBar/navLink/LinkTwo'
import LinkThree from '../../atoms/navBar/navLink/LinkThree'
import LinkFour from '../../atoms/navBar/navLink/LinkFour'

function NavLink() {
  return (
    <div>
        <Box sx={{ display: "flex", gap: 5 }}>
            <LinkOne/>
            <LinkTwo/>
            <LinkThree/>
            <LinkFour/>
        </Box>
    </div>
  )
}

export default NavLink