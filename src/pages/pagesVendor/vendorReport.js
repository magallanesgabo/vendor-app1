import React, { useEffect, useState } from 'react'
import {
        Grid, 
        Container,
        CircularProgress,
        Box,
        Stack,
        Alert,
    } from '@mui/material';
import BottomNav from '../../components/componentsVendor/layout/BottomNav'
import CardLogos from '../../components/ImagesView/CardLogos'
import { Return } from '../../components/componentsVendor/Return';
import api from '../../utils/App.js';
import TableReport from '../../components/componentsVendor/TableReport';

const VendorReport = () => {

    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('error');

    useEffect( () => {

        const fetchData = async () => {
            const token = localStorage.getItem('token')
            const headers = { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };
              
            try{
      
              const res = await api.get(`vendors/ticket-scanned`, {headers});

              if(res.status === 200){

                setLoading(true)
                setDatos(res.data)
    
              }

            }catch (err) {
    
                setMessage("We couldn't process your request. Please try again later")
                setStatus('error')
                setLoading(false)
                setTimeout(()=>setMessage(false), 6000)
      
            }
        }
    
        fetchData()

    }, []) 


    return (
    	<>  
            <Return text='Vendor Report'/>          
            <Grid item xs={12}>
                <Container maxWidth="xs" className='cardGradiente' sx={{paddingTop: '60px', textAlign: 'center'}}>
                    <Grid container spacing={1} mb={10}>
                        <Grid item xs={12} mb={2}>
                        {
                            loading ? <TableReport data={datos}/>
                            :
                            <Box sx={{
                                alignSelf: 'center',
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center', 
                            }} mt={8}>
                                <CircularProgress />
                            </Box>
                        }
                        {message &&
                            <Stack sx={{ width: '100%', paddingTop: 2 }} spacing={2}>
                                <Alert variant="filled" severity={status} align='justify'>
                                {message}
                                </Alert>
                            </Stack>
                        }



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