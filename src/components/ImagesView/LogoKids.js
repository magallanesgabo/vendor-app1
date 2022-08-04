import React from 'react'
import {
    Box,
    Typography
  } from '@mui/material';

import kids from '../../assets/kids.jpg'

const LogoKids = () => {
  return (
    <Box mb={2} sx={{
      textAlign: 'center',
      
    }}>
      <Typography variant="body1" mt={2} sx={{paddingTop: '20px', fontFamily: 'proxima-nova-extrabold'}} gutterBottom component="div">
          <b>All proceeds go to</b> 
      </Typography>
      <img src={kids} className='kids_cancer'  alt='Kids Cancer' />
    
    </Box>
  )
}

export default LogoKids