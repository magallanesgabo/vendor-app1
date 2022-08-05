import React, { useEffect, useState } from 'react'
import CardLogos from '../../components/ImagesView/CardLogos';
import { Return } from '../../components/componentsAdmin/Return';
import { Alert, Box, CircularProgress, Container, Grid, Stack } from '@mui/material';
import BottomNav from '../../components/componentsAdmin/layout/BottomNav';
import api from '../../utils/App.js';
import TableReport from '../../components/componentsAdmin/TableReport';

const Report = () => {

   
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(false)
    const [status, setStatus] = useState('error');

    
    useEffect( () => {

        const fetchData = async () => {
            const token = localStorage.getItem('token')
            const headers = { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };
              
            try{
      
              const res = await api.get(`surveys/report`, {headers});

              if(res.status === 200){

                setLoading(true)
                setDatos(res.data.Result)
    
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
        <Return text='Voting Report'/>       
        <Grid item xs={12}>
            <Container maxWidth="xs" className='cardGradiente' sx={{paddingTop: '60px', textAlign: 'center'}}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>

                    {
                        loading ? <TableReport data={datos}/>
                        :
                        <Box sx={{
                            alignSelf: 'center',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center', 
                        }} mt={8} mb={8}>
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
                        <BottomNav nav={0} />
                    </Grid>
                    
                    <br/><br/><br/>
                </Grid>
            </Container>
        </Grid>            
    </>



  )
}

export default Report