import React from 'react'
import {
        Grid, 
        Container,
    } from '@mui/material';
import BottomNav from '../../components/componentsVendor/layout/BottomNav'
import CardLogos from '../../components/ImagesView/CardLogos'
import TableReport from '../../components/componentsVendor/TableReport';
import { Return } from '../../components/componentsVendor/Return';

const VendorReport = () => {

    return (
    	<>  
            <Return text='Vendor Report'/>          
            <Grid item xs={12}>
                <Container maxWidth="xs" className='cardGradiente' sx={{paddingTop: '60px', textAlign: 'center'}}>
                    <Grid container spacing={1} mb={10}>
                        <Grid item xs={12} mb={2}>
                           <TableReport />
                        </Grid>
                        <CardLogos />
                        <Grid item xs={12}>
                            <BottomNav nav={2} />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>            
        </>
    )
}

export default VendorReport