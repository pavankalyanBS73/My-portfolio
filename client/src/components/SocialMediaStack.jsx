import React from 'react'
import { Avatar, Box, IconButton } from '@mui/material'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function SocialMediaStack() {
  return (
    <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'0.7rem'}}>
        <Avatar>
            <IconButton href='https://www.linkedin.com/in/pavan-kalyan-b-s-bb833a211/' target="_blank">
                <LinkedInIcon sx={{color:'black'}}/>
            </IconButton>
        </Avatar>
        <Avatar>
            <IconButton href='https://github.com/pa1kalyanbs' target="_blank">
                <GitHubIcon sx={{color:'black'}}/>
            </IconButton>
        </Avatar>
        <Avatar>
            <XIcon sx={{color:'black'}}/>
        </Avatar>
        <Avatar>
            <IconButton href='https://www.instagram.com/pavankalyan3777/' target="_blank">
                <InstagramIcon sx={{color:'black'}}/>
            </IconButton>
        </Avatar>
        <Avatar>
            <IconButton href='mailto:pavankalyanbs73@gmail.com'>
                <EmailIcon sx={{color:'black'}}/>
            </IconButton>
        </Avatar>
    </Box>
  )
}
