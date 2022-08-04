import { createTheme } from '@mui/material/styles';

const ThemeNew = () => {
    const theme = createTheme({
        palette: {
          primary: {
      
            main: '#f4bb2e',
            color: '#ffffff',
          },
          secondary: {
            main: '#000000',
          },
        },
        typography: {
          fontFamily: ['proxima', 'sans-serif'].join(','),
          h6: {
            fontFamily: ['proxima-nova-extrabold', 'sans-serif'].join(','),
           },
          button: {
            fontFamily: ['proxima-nova-extrabold', 'sans-serif'].join(','),
            fontSize: '0.95rem'
           },
          body2: {
            fontFamily: ['proxima-nova-extrabold', 'sans-serif'].join(','),
           },
          caption: {
            fontFamily: ['proxima-nova-extrabold', 'sans-serif'].join(','),
            lineHeight: 'none'
           },
          subtitle1: {
            fontSize: '0.8rem'
           }
         },
         
      
    })

    return {
        theme
    }
}

export default ThemeNew