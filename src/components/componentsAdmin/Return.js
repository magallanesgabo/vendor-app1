import { Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import ThemeApp from '../../utils/ThemeApp';

export const Return = ({text}) => {

  const {CustomAppBar, CustomArrowBackIosIcon, theme} = ThemeApp()

  const navigate = useNavigate();
  const handleReturn = () =>{
    navigate(-1);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <CustomAppBar position="fixed">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleReturn}
              >
                <CustomArrowBackIosIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {text}
              </Typography>

            </Toolbar>
          </CustomAppBar>
        </Box>
      </ThemeProvider>
    </>
  )
}
