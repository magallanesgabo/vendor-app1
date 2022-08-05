import React from 'react'
import {
        Grid, 
        Container,
        Typography,
    } from '@mui/material';
import BottomNav from '../../components/componentsAdmin/layout/BottomNav'
import CardWrapper from '../../components/componentsAdmin/CardWrapper';
import CardLogos from '../../components/ImagesView/CardLogos'
import { Return } from '../../components/componentsAdmin/Return';

const Home = () => {

    return (
        <>     
            <Return text='Sponsors Banner'/>       
            <Grid item xs={12}>
                <Container maxWidth="xs" className='cardGradiente' sx={{paddingTop: '50px', textAlign: 'center'}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="body1" mt={2} align='center' gutterBottom component="div">
                            Hello, Admin!
                            </Typography> 
                        </Grid>
                        <CardWrapper />
                        <CardLogos />
                        <Grid item xs={12}>
                            <BottomNav nav={0} />
                        </Grid>
                        
                        <br/><br/><br/>
                    </Grid>
                </Container>
            </Grid>            
        </>
    )
}

export default Home