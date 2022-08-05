import React, { useState } from 'react'
import {
        Grid, 
        Container,
        Stack,
        Alert,
        Button
    } from '@mui/material';
import BottomNav from '../../components/componentsAdmin/layout/BottomNav'
import CardLogos from '../../components/ImagesView/CardLogos'
import { Return } from '../../components/componentsAdmin/Return';
import { Form, Formik } from 'formik';
import TextfieldWrapper from '../../components/form/TextField';
import { FormNew } from '../../helpers/FormNew';
import ButtonWrapper from '../../components/form/Button';
import api from '../../utils/App.js';

const ResendPassportSms = () => {


    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('error');
    
    const {INITIAL_FORM_STATE, FORM_VALIDATION_SMS} = FormNew({
        ticket: '',
        last_name: '',
        phone: '',
    })
  
    const token = localStorage.getItem('token')

    const onSubmit = async ({
      ticket,
      last_name,
      phone,
    }, props) => { 
    setLoading(false)


    // console.log(ticket+' '+ last_name+' '+phone)

      const headers = { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      };

      const data = {
        "last_name": last_name,
        "phone_number": phone,
        "ticket_id": parseInt(ticket)
      }

      await api.post(`admins/send-ticket-information`, data, {headers})
      .then(function (response) {

          if(response.status === 204){
              
            setMessage('Message sent successfully')
            setStatus('success')
            setLoading(true)
            setTimeout(()=>setMessage(false), 6000)

            props.resetForm()
            props.setSubmitting(false)

          }
      })
      .catch(function (response) {

        setMessage("We couldn't process your request. Please try again later")
        setStatus('error')
        setLoading(true)
        setTimeout(()=>setMessage(false), 6000)
        props.resetForm()
        props.setSubmitting(false)

      });
  
    }

  return (
    <>     
        <Return text='Resend Passport by SMS'/>     
        <Grid item xs={12}>
            <Container maxWidth="xs" className='cardGradiente' sx={{paddingTop: '60px', textAlign: 'center'}}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                    <Formik
                      initialValues={{...INITIAL_FORM_STATE}}
                      validationSchema={FORM_VALIDATION_SMS}
                      onSubmit={onSubmit}
                    >
                      {()=>(
                          <Form>
                            <Stack spacing={2}>
                              <label id='ticket' className='textLabel' >Ticket #</label>
                              <TextfieldWrapper
                                  name='ticket'
                              />
                              <label id='last_name' className='textLabel' >Last Name</label>
                              <TextfieldWrapper
                                  name='last_name'
                              />
                              <label id='phone' className='textLabel' >Phone</label>
                              <TextfieldWrapper
                                  name='phone'
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

export default ResendPassportSms