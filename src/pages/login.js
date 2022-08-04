import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import {
  Container, 
  Grid, 
  Typography,
} from '@mui/material';
import Textfield from '../components/form/TextField.js'
import Button from '../components/form/Button.js'
import Logo from '../components/ImagesView/Logo';
import LogoKids from '../components/ImagesView/LogoKids.js';
import { FormNew } from '../helpers/FormNew.js';
import api from '../utils/App.js';
import { AuthContext } from '../auth/AuthContext.js';
import { types } from '../types/types.js';
import UserAlert from '../components/AlertMessages/userAlert';


const LoginView = () => {

  const {INITIAL_FORM_STATE, FORM_VALIDATION} = FormNew({
    email: '',
    password: ''
  });

  const [condicion, condicion2] = useState(false);
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);

  const onSubmit = async (values, props) => {


    await api.post(`users/login`, values)
    .then(function (response) {
        if(response.statusText === "OK"){
            
          localStorage.setItem('token', response.data.authorization_token);
          let decoded = jwt_decode(response.data.authorization_token);

          dispatch({
              type: types.login,
              payload:{
                user: decoded.user,
                rol: decoded.rol
              }
          })

          navigate('/vendor/home', { replace: true });

        }
    })
    .catch(function (response) {
          condicion2(true)
          setTimeout(()=>condicion2(false), 5000)
    });

    setTimeout(() => {
        props.resetForm()
        props.setSubmitting(false)
    }, 2000)

  }

  return (
    <>

      <Grid item xs={12}>
        <Container maxWidth="xs" className='cardGradiente' sx={{padding: '30px'}}>
          <Grid container spacing={1} mb={2}>
            <Logo />
          </Grid>
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE}}
              validationSchema={FORM_VALIDATION}
              onSubmit={(onSubmit)}
          >{() => (
              <Form>
                <Grid item xs={12} mb={2}>
                  <Textfield 
                      name='email'
                      label='Enter your email'
                      size="small" />            
                </Grid>

                <Grid item xs={12} mb={2}>           
                    <Textfield 
                        name='password'
                        label='Enter your password'
                        size="small"  
                        type="password"
                    />           
                </Grid>
                <Grid item xs={12}>
                  <Button>
                   Login
                  </Button>

                </Grid>
                <Grid item xs={12} mb={4}>           
                    <Typography variant="body1" mt={2} align='center' gutterBottom component="div">
                        <Link to={'/reset-password'} style={{color:'#000'}}>Forgot your password?</Link>
                    </Typography>   
                    { condicion && <UserAlert/> }        
                </Grid>
              </Form>
          )}
          </Formik>
          <LogoKids />
        </Container>
      </Grid>

    </>
  )
}

export default LoginView