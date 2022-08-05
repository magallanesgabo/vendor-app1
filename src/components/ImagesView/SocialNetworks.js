import { Grid, Box } from '@mui/material'
import React from 'react'
import facebook from '../../assets/redes/facebook.webp'
import instagram from '../../assets/redes/instagram.webp';
import twitter from '../../assets/redes/twitter.png';

const SocialNetworks = () => {
  return (
    <>
        <Grid item xs={12}>
            <Box mt={1} mb={1} sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
                
            }} >
                <a href="https://www.instagram.com/barleysmoke" rel="noopener noreferrer" className='networks' target="_blank">
                    <img src={instagram} className="cardRedes" alt='Instagram'  />
                </a>
                <a href="https://www.facebook.com/barleyandsmoke" rel="noopener noreferrer" className='networks' target="_blank">
                    <img src={facebook} className="cardRedes" alt='facebook' />
                </a>
                <a href="https://twitter.com/barleysmoke" rel="noopener noreferrer" className='networks' target="_blank">
                    <img src={twitter} className="cardRedes" alt='Twitter' />
                </a>
                
            </Box>
        </Grid>    
    </>
  )
}

export default SocialNetworks