import React from 'react'
import {
        Grid, 
        Container,
    } from '@mui/material';
import BottomNav from '../../components/componentsVendor/layout/BottomNav'
import CardLogos from '../../components/ImagesView/CardLogos'
import QrScanner from '../../components/componentsVendor/QrScanner';
import { Return } from '../../components/componentsVendor/Return';

const ScanCode = () => {

    return (
        <>  
            <Return text='Scan Qr Code'/>          
            <Grid item xs={12}>
                <Container maxWidth="xs" className='cardGradiente' sx={{paddingTop: '60px', textAlign: 'center'}}>
                    <Grid container spacing={1} mb={10}>
                        <Grid item xs={12}>
                            <QrScanner />
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

export default ScanCode