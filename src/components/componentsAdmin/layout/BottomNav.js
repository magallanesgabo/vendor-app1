import React, {useContext, useState} from 'react'
import {
    Grid,
    Paper,
    Dialog,
    DialogTitle,
    DialogActions,
    Button
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';
import ThemeApp from '../../../utils/ThemeApp';
import messages from '../../../json/messages.json'

const BottomNav = ({nav = 0}) => {

    const [value, setValue] = useState(nav);

    const {CustomBottomNavigation, CustomBottomNavigationAction, theme} = ThemeApp()

    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleLogout =() => {
      navigate('/', { replace: true });
      localStorage.clear();
      dispatch({
        type: types.logout
      })
    }

  return (
    <>
    <ThemeProvider theme={theme}>
        <Grid item xs={12}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex:30 }} elevation={3} >
                <CustomBottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    
                    }}
                >
                    <CustomBottomNavigationAction component={Link} to={'/vendor/home'} label="HOME" icon={<HomeIcon fontSize="small" />} />
                    <CustomBottomNavigationAction label="LOGOUT" onClick={handleClickOpen} icon={<LogoutIcon fontSize="small" />} />
                </CustomBottomNavigation>
            </Paper>
        </Grid>
    </ThemeProvider>    
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {messages[0].log_out}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleLogout} variant="contained" autoFocus>
            Yes</Button>
          <Button onClick={handleClose} variant="contained" color="secondary">No </Button>
        </DialogActions>
      </Dialog> 
    </>

  )
}

export default BottomNav