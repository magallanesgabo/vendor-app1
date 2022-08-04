import { Grid, Box } from '@mui/material'
import React from 'react'
import kids from '../../assets/kids.jpg'
import logo from '../../assets/logo.png';

const CardLogos = () => {
  return (
    <>
        <Grid item xs={6}>
            <Box mt={1} mb={1} sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                flexWrap: 'wrap'
                
            }}>
                <img src={logo} className="cardLogos" alt='Logo' />
            </Box>
        </Grid>
        <Grid item xs={6}>
            <Box mt={1} mb={1} sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexWrap: 'wrap'
                
            }}>
                <img src={kids} className="cardLogos" alt='Kids Cancer' />
            </Box>
        </Grid>    
    </>
  )
}

export default CardLogos