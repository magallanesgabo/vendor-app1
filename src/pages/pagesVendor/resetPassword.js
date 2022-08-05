import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import {
  Container, 
  Grid, 
  Typography,
} from '@mui/material';
import Textfield from '../../components/form/TextField.js'
import Button from '../../components/form/Button.js'
import Logo from '../../components/ImagesView/Logo';
import LogoKids from '../../components/ImagesView/LogoKids.js';
import { FormNew } from '../../helpers/FormNew.js';
import api from '../../utils/App.js';
import SocialNetworks from '../../components/ImagesView/SocialNetworks.js';

const ResetPassword = () => {

  const {INITIAL_FORM_STATE, FORM_VALIDATION_RESET} = FormNew({
    email: '',
  });

  const onSubmit = async  (values, props) => {

      await api.post(`users/password/reset`, values)
      .then(function (response) {
          console.log(response);
      })

      console.log(values)
      setTimeout(() => {
          props.resetForm()
          props.setSubmitting(false)
      }, 2000)

  }

  return (
    <>

      <Grid item xs={12}>
        <Container maxWidth="xs" className='cardGradiente' sx={{padding: '30px'}}>
          <Grid container spacing={1} mb={4}>
            <Logo />
          </Grid>
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE}}
              validationSchema={FORM_VALIDATION_RESET}
              onSubmit={(onSubmit)}
          >{(props) => (
              <Form>
                <Grid item xs={12} mb={2}>
                  <Textfield 
                      name='email'
                      label='Enter your email'
                      size="small" />            
                </Grid>
                <Grid item xs={12}>

                <Button color='primary' variant="contained" disabled={props.isSubmitting}  fullWidth>{props.isSubmitting ? "Loading" : "Reset Password"}</Button>
                </Grid>
                <Grid item xs={12} mb={4}>           
                    <Typography variant="body1" mt={2} align='center' gutterBottom component="div">
                        <Link to={'/'} style={{color:'#000'}}>Go to Login Page</Link>
                    </Typography>          
                </Grid>
              </Form>
          )}
          </Formik>
          <LogoKids />
        </Container>
        <Grid container spacing={1} mb={2} mt={2}>
          <SocialNetworks />
        </Grid>
      </Grid>

    </>
  )
}

export default ResetPassword