import React from 'react'
import {
    Grid, 
    Box
  } from '@mui/material';
import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <Grid item xs={12}>
        <Box mt={2} mb={2} sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
            
        }}>
            <img src={logo} className="logo_barley" alt='Logo' />
        </Box>
    </Grid>
  )
}

export default Logo