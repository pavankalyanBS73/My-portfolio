import { Avatar, Box, Button, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import SocialMediaStack from './SocialMediaStack';
import my_pic from "../asserts/my-pic.png"
import Skills from './Skills';
import WorkExprence from './WorkExprence';
import Footer from './Footer';


export default function HomePage() {
  return (
    <>
      <Box sx={{display:'flex', 
          alignItems:'center', 
          justifyContent:'space-evenly', 
          marginTop:'5rem',
          }}
          >
          <Box sx={{display:'flex', flexDirection:'column', gap:'1rem'}}>
              <Typography variant='h3' sx={{fontWeight:'bold'}}>Hi There 😊</Typography>
              <Typography variant='h3' sx={{fontWeight:'bold'}}>I'm Pavan Kalyan B.S</Typography>
              <Typography variant='h5' sx={{fontWeight:'bold'}}>A Fullstack developer (MERN stack) and DevOps specialist 🚀</Typography>
              <Box>
                <Button 
                variant="contained" 
                endIcon={<SendIcon />}
                sx={{backgroundColor:'whitesmoke', color:'black'}}
                >About me</Button>
              </Box>
              <Box>
                  <SocialMediaStack/>
              </Box>
          </Box>
          <Box>
              <Avatar alt="Remy Sharp" src={my_pic} 
              sx={{ width: 300, height: 300, bgcolor:'whitesmoke'}}
              />
          </Box>
      </Box>
      <Box sx={{display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",marginTop:'4rem', marginBottom:'6rem'}}>
          <Typography variant='h3' sx={{fontWeight:'bold'}}>lines of code written till now</Typography>
          <Typography variant='h2' sx={{fontWeight:'bold'}}>10,000+ lines</Typography>
      </Box>
      <Typography variant='h4' sx={{fontWeight:'bold', marginLeft:'7.2rem', marginBottom:'1rem'}}>Skills</Typography>
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Skills/>
      </Box>
      <Typography variant='h4' sx={{fontWeight:'bold', marginLeft:'7.2rem', marginBottom:'1rem', marginTop:'1rem'}}>Work Exprience</Typography>
      <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', marginLeft:'3.5rem'}}>
        <WorkExprence/>
      </Box>
      <Footer/>
   </>
  )
}
