import { Button, Typography } from '@mui/material'
import React from 'react'

function Headline() {
  return (
    <div>
        <Typography>
            <div>
                How it works
            </div>
        </Typography>

        <Typography>
            <div>
            Headline with USP related to how your product or service works
            </div>
        </Typography>

        <div>
            <Button variant='outlined' color='inherit'>Learn more</Button>
        </div>
    </div>
  )
}

export default Headline