import React from 'react'
import {
        Grid, 
        Container,
        Typography,
        Button,
        Box,
    } from '@mui/material';
import BottomNav from '../../components/componentsVendor/layout/BottomNav'
import CardLogos from '../../components/ImagesView/CardLogos'
import logo from '../../assets/error.png';
import { Return } from '../../components/componentsVendor/Return';
import { Link } from 'react-router-dom';

const EscaneoFallido = () => {

	const logoStyle = { height: 120, display: 'block'}

    return (
    	<>  
            <Return text='ERROR'/>          
            <Grid item xs={12}>
                <Container maxWidth="xs" className='cardGradiente' sx={{paddingTop: '60px', textAlign: 'center'}}>
                    <Grid container spacing={1} mb={10}>
                        <Grid item xs={12} mb={2}>
                        	<Typography variant="h6" component="div" mb={6} gutterBottom>
                            	ITEM NOT AVAILABLE
                          	</Typography>
                          	<Box sx={{ 
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap' }} 
								elevation={0}
                          		mb={5}
							>
                            	<img style={logoStyle} src={ logo } alt='error'/>
                          	</Box>
                          	<Button component={Link} to="/vendor/scan-code" variant="contained" className="button_full" fullWidth={true}>
                          	Scan new QR</Button>
                        </Grid>
                        <CardLogos />
                        <Grid item xs={12}>
                            <BottomNav nav={1} />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>            
        </>
    )
}

export default EscaneoFallido