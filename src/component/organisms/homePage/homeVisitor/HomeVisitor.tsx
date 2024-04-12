import { Box } from '@mui/material'
import React from 'react'
import Visitor from '../../../molecules/homePage/homePageVisitor/Visitor'
import Companies from '../../../molecules/homePage/homePageVisitor/Companies'

function HomeVisitor() {
  return (
    <div>
        <Box sx={{my:14}}>
            <Visitor/>
            <Companies/>
        </Box>
    </div>
  )
}

export default HomeVisitor