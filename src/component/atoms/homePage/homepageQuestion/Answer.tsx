import { ListItemText } from '@mui/material'
import React from 'react'

function Answer(props) {
  const {ques} = props;
  return (
    <div>
        <ListItemText primary={"ques"} />
    </div>
  )
}

export default Answer