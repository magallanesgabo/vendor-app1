import React, { useContext } from 'react'
import {
        Grid, 
        Container,
        Typography,
    } from '@mui/material';
import BottomNav from '../../components/componentsVendor/layout/BottomNav'
import CardLogos from '../../components/ImagesView/CardLogos'
import CardWrapper from '../../components/componentsVendor/CardWrapper';
import { AuthContext } from '../../auth/AuthContext';

const Vendor = () => {

    const {user:{user}} = useContext(AuthContext);
    const header = { padding: 25, textAlign: 'center', fontSize: '1.2em', fontWeight: 'bolder', color:'#373737'}

    return (
        <>            
            <Grid item xs={12}>
                <Container maxWidth="xs" className='cardGradiente' sx={{padding: '5px', textAlign: 'center'}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                        <Typography style={ header } color='primary'>
                            Hello, {user}
                        </Typography>
                            <CardWrapper/> 
                        </Grid>
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

export default Vendor