import { Button, Typography } from '@mui/material'
import React from 'react'

function Fequently() {
  return (
    <div>
        <Typography>
            <div>
            Frequently asked questions
            </div>
        </Typography>

        <Typography>
            <div>
            Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.
            </div>
        </Typography>

        <div>
            <Button variant='outlined' color='inherit'>Contact us</Button>
        </div>
    </div>
  )
}

export default Fequently