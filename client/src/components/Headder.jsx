import React from 'react'
import { Box, Link } from '@mui/material';
import logo_v2 from '../asserts/logo_v2.png'

export default function Headder() {
  return (
    <Box sx={{backgroundColor:'whitesmoke',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-evenly', 
                width: '100%', 
                height: '3.5rem',
                boxShadow: 6
                 }}>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', height:'3rem', width:'10rem'}}>
            <img src={logo_v2} alt='logo' style={{height:'100%',width:'100%'}}/>
        </Box>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-evenly', gap:'3rem', fontSize:'1.3rem'}}>
            <Link href="#" underline="hover" sx={{color:'black', fontWeight:'bold'}}>Home</Link>
            <Link href="#" underline="hover" sx={{color:'black', fontWeight:'bold'}}>About</Link>
            <Link href="#" underline="hover" sx={{color:'black', fontWeight:'bold'}}>Skills</Link>
            <Link href="#" underline="hover" sx={{color:'black', fontWeight:'bold'}}>Work</Link>
            <Link href="#" underline="hover" sx={{color:'black', fontWeight:'bold'}}>Expriences</Link>
            <Link href="#" underline="hover" sx={{color:'black', fontWeight:'bold'}}>Contacts</Link>
        </Box>
    </Box>
  )
}
