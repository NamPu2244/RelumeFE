import { Box } from '@mui/material'
import React from 'react'
import VisitorSubCaption from '../../../atoms/homePage/homePageVisitor/VisitorSubCaption'
import Icon from '../../../atoms/homePage/homePageVisitor/visitorIcon/Icon'

function Companies() {
  return (
    <div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <div>
                <VisitorSubCaption/>
                <Icon/>
            </div>
            
        </Box>
    </div>
  )
}

export default Companies