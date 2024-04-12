import React, { useMemo } from 'react'
import Highlight from '../../../molecules/homePage/homePageHighlight/Highlight'
import { Box } from '@mui/material'
import datahightlight from '../../../../data/datahightlight';
import HighlightBody from '../../../atoms/homePage/homePageHighlight/HighlightBody';
import HightHeader from '../../../atoms/homePage/homePageHighlight/HightHeader';
import HighlightIcon from '../../../atoms/homePage/homePageHighlight/HighlightIcon';

function HighlightOr() {

  

  return (
    <div>
      <Box >
         <Highlight/>
      </Box>
      
    </div>
  )
}

export default HighlightOr