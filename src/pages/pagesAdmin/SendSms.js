import React, { useState } from 'react'
import {
        Grid, 
        Container,
        Stack,
        Alert,
        Button,
    } from '@mui/material';
import BottomNav from '../../components/componentsAdmin/layout/BottomNav'
import CardLogos from '../../components/ImagesView/CardLogos'
import { Return } from '../../components/componentsAdmin/Return';
import { Form, Formik } from 'formik';
import TextfieldWrapper from '../../components/form/TextField';
import { FormNew } from '../../helpers/FormNew';
import ButtonWrapper from '../../components/form/Button';
import api from '../../utils/App.js';

const SendSms = () => {


    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('error');
    
    const {INITIAL_FORM_STATE, FORM_VALIDATION_MESSAGE} = FormNew({
        message: '',
    })
  
    const token = localStorage.getItem('token')

    const onSubmit = async (values, props) => { 

      setLoading(false)
    
      const headers = { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      };

      const data = {
        "message": values.message,
      }

      await api.post(`admins/send-message`, data, {headers})
      .then(function (response) {

          if(response.statusText === "Accepted"){
              
            setMessage('Message sent successfully')
            setStatus('success')
            setLoading(true)
            setTimeout(()=>setMessage(false), 6000)

          }
      })
      .catch(function (response) {

        setMessage("We couldn't process your request. Please try again later")
        setStatus('error')
        setLoading(true)
        setTimeout(()=>setMessage(false), 6000)
      });
  
      setTimeout(() => {
          props.resetForm()
          props.setSubmitting(false)
      }, 2000)

    }


  return (
    <>     
        <Return text='Send SMS Update'/>     
        <Grid item xs={12}>
            <Container maxWidth="xs" className='cardGradiente' sx={{paddingTop: '60px', textAlign: 'center'}}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                    <Formik
                      initialValues={{...INITIAL_FORM_STATE}}
                      validationSchema={FORM_VALIDATION_MESSAGE}
                      onSubmit={onSubmit}
                    >
                      {()=>(
                          <Form>
                            <Stack spacing={2}>
                              <label id='Message' className='textLabel' >Message</label>
                              <TextfieldWrapper
                                  multiline
                                  name='message'
                                  rows={4}
                                  
                              />
                              {message &&
                                <Stack sx={{ width: '100%', paddingTop: 2 }} spacing={2}>
                                  <Alert variant="filled" severity={status} align='justify'>
                                    {message}
                                  </Alert>
                                </Stack>
                              }

                              {
                                loading ? <ButtonWrapper>
                                Send
                              </ButtonWrapper>
                                :
                                <Button variant="contained" disabled>
                                  processing...
                                </Button>
                              }
                            </Stack>
                          </Form>
                      )}
                    </Formik>
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

export default SendSms