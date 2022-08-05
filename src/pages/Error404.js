import React from 'react';
import { useNavigate } from 'react-router';
import {
  Container, 
  Grid, 
  Typography,
} from '@mui/material';

import Logo from '../components/ImagesView/Logo';
import LogoKids from '../components/ImagesView/LogoKids.js';

const Error404 = () => {

    const navigate = useNavigate();
    const handleReturn = () =>{
        navigate(-1);
    }


  return (
    <>

      <Grid item xs={12}>
        <Container maxWidth="xs" className='cardGradiente' sx={{padding: '30px'}}>
          <Grid container spacing={1} mb={2}>
            <Logo />
          </Grid>
            <Typography variant="h1" mt={2} align='center' gutterBottom component="div">
                404
            </Typography>
            <Typography variant="body1" mt={2} align='center' gutterBottom component="div" onClick={handleReturn} sx={{cursor:'pointer', textDecoration: 'underline'}}>
                Go back
            </Typography>
          <LogoKids />
        </Container>
      </Grid>

    </>
  )
}

export default Error404