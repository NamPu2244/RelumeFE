import React from 'react'
import FequentlyQuestion from '../../../molecules/pricingPage/pricingQuestions/FequentlyQuestion'
import { Box } from '@mui/material'
import ContectUs from '../../../molecules/pricingPage/pricingQuestions/ContectUs'
import QuestionContet from '../../../atoms/pricingPage/pricingPageQuestions/QuestionContet'

function QuestionsPricing() {
  return (
    <Box sx={{ display: "grid", justifyContent: "center", px: 28, pb: 28 }}>
        <Box sx={{ mb: 10 }}>
            <FequentlyQuestion/>
        </Box>

        <Box sx={{ mb: 10 }}>
            <QuestionContet/>
        </Box>

        <Box>
            <ContectUs/>
        </Box>
        
    </Box>
  )
}

export default QuestionsPricing