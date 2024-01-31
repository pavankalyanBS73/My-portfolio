import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Skills() {
  return (
    <>
        <Box sx={{
          height:'16rem',
          width:'16rem',
          backgroundColor:'lightgray',
          padding:'20px',
          boxShadow:9,
          marginBottom:'3rem',
          marginLeft:'3rem',
          borderRadius:'12px'
        }}>
          <Typography variant='h5' sx={{fontWeight:'bold'}}>Programing Languages</Typography>
          <Box sx={{marginLeft:'12px'}}>
              <Typography variant='h6'>1.Javascript</Typography>
              <Typography variant='h6'>2.Html</Typography>
              <Typography variant='h6'>3.Css</Typography>
              <Typography variant='h6'>4.Python</Typography>
          </Box>
        </Box>

        <Box sx={{
          height:'16rem',
          width:'16rem',
          backgroundColor:'lightgray',
          padding:'23px',
          boxShadow:9,
          marginBottom:'3rem',
          marginLeft:'3rem',
          borderRadius:'12px'
        }}>
          <Typography variant='h5' sx={{fontWeight:'bold'}}>Frontend</Typography>
          <Box sx={{marginLeft:'12px'}}>
              <Typography variant='h6'>1.ReactJS</Typography>
              <Typography variant='h6'>2.Redux Toolkit</Typography>
              <Typography variant='h6'>3.Material-UI</Typography>
          </Box>
        </Box>

        <Box sx={{
          height:'16rem',
          width:'16rem',
          backgroundColor:'lightgray',
          padding:'23px',
          boxShadow:9,
          marginBottom:'3rem',
          marginLeft:'3rem',
          borderRadius:'12px'
        }}>
          <Typography variant='h5' sx={{fontWeight:'bold'}}>Backend Server</Typography>
          <Box sx={{marginLeft:'12px'}}>
              <Typography variant='h6'>1.NodeJS</Typography>
              <Typography variant='h6'>2.Express</Typography>
              <Typography variant='h6'>3.MongoDB</Typography>
          </Box>
        </Box>

        <Box sx={{
          height:'16rem',
          width:'16rem',
          backgroundColor:'lightgray',
          padding:'23px',
          boxShadow:9,
          marginBottom:'3rem',
          marginLeft:'3rem',
          borderRadius:'12px'
        }}>
          <Typography variant='h5' sx={{fontWeight:'bold'}}> DevOps</Typography>
          <Box sx={{marginLeft:'12px'}}>
              <Typography variant='h6'>1.AWS</Typography>
              <Typography variant='h6'>2.Kubernetes</Typography>
              <Typography variant='h6'>3.Docker</Typography>
              <Typography variant='h6'>4.Jenkins (CI/CD)</Typography>
              <Typography variant='h6'>5.Ansible</Typography>
              <Typography variant='h6'>6.Terraform (IAC)</Typography>
              <Typography variant='h6'>7.ArgoCD (CD)</Typography>
          </Box>
        </Box>
    </>
  )
}
