import * as Yup from 'yup'

export const FormNew = (initialState = {}) => {

    const INITIAL_FORM_STATE = initialState;
    
      //validate form
      const FORM_VALIDATION = Yup.object().shape({
        email:Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required')
      })

      const FORM_VALIDATION_RESET = Yup.object().shape({
        email:Yup.string().required('Email is required'),
      })


      return {
        INITIAL_FORM_STATE,
        FORM_VALIDATION,
        FORM_VALIDATION_RESET

      }
}
