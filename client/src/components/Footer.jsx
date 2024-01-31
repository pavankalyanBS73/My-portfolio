import React from 'react'
import SocialMediaStack from './SocialMediaStack';
import { Avatar, Box, Typography } from '@mui/material'
import my_pic from "../asserts/my-pic.png"

export default function Footer() {
  return (
    <Box sx={{backgroundColor:'black',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                width: '100%', 
                height: '3.5rem',
                boxShadow: 6,
                gap:'1rem',
                 }}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap:'0.5rem'}}>
                  <Avatar alt="Remy Sharp" src={my_pic} sx={{bgcolor:'white',marginLeft:'2rem'}}/>
                  <Typography variant='h6' sx={{color:'white'}}>Pavan kalyan B.S</Typography>
                  <Box sx={{width: "0px",height:"2rem",float: "left",border: "1px inset"}}></Box>
                  <Typography sx={{color:'white'}} >Copyright © 2024 www.pavanportfolio.com</Typography>
                </Box>
                <Box sx={{marginRight:'2rem'}}>
                  <SocialMediaStack/>
                </Box>
      </Box>
  )
}
