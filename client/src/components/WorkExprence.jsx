import React from 'react'
import { Box, Typography } from '@mui/material'

export default function WorkExprence() {
  return (
    <Box sx={{
        height:'8rem',
        width:'16rem',
        backgroundColor:'lightgray',
        padding:'20px',
        boxShadow:9,
        marginBottom:'3rem',
        marginLeft:'3rem',
        borderRadius:'12px'
      }}>
        <Typography variant='h5' sx={{fontWeight:'bold'}}>Tech Mahindra</Typography>
        <Box sx={{marginLeft:'12px'}}>
            <Typography variant='h6'>Associate Software Engineer</Typography>
            <Typography variant='h6'>2+ years</Typography>
        </Box>
      </Box>
  )
}
