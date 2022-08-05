import * as Yup from 'yup'

export const FormNew = (initialState = {}) => {

    const INITIAL_FORM_STATE = initialState;
    
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

      //validate form
      const FORM_VALIDATION = Yup.object().shape({
        email:Yup.string().email().required('Email is required'),
        password: Yup.string().required('Password is required')
      })

      const FORM_VALIDATION_RESET = Yup.object().shape({
        email:Yup.string().email().required('Email is required'),
      })

      const FORM_VALIDATION_MESSAGE = Yup.object().shape({
        message:Yup.string().required('Message is required'),
      })
  
      const FORM_VALIDATION_SMS = Yup.object().shape({
        ticket:Yup.string().required('Ticket is required'),
        last_name:Yup.string().required('Last Name is required'),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is required'),
      })
  
  
      const FORM_VALIDATION_RESENT = Yup.object().shape({
        ticket:Yup.string().required('Ticket is required'),
      })

      return {
        INITIAL_FORM_STATE,
        FORM_VALIDATION,
        FORM_VALIDATION_RESET,
        FORM_VALIDATION_MESSAGE,
        FORM_VALIDATION_SMS,
        FORM_VALIDATION_RESENT,

      }
}
