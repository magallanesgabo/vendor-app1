import React from 'react'
import {
    Box,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import { useTheme, styled, ThemeProvider} from '@mui/material/styles';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

const CardWrapper = () => {

    const theme = useTheme();

    const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.secondary.main,
    })); 

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ 
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap' }} elevation={0}>
            <Stack spacing={2} sx={{ width:'80%' }}>
                <Item component={Link} className="cardMenu" to="/vendor/scan-code">
                    <QrCodeScannerIcon sx={{ fontSize: 50 }} />
                    <Typography variant="body1" align='center' gutterBottom component="div">
                        Scan Passport
                    </Typography> 
                </Item>
                <Item component={Link} className="cardMenu" to="/vendor/vendor-report">
                    <AssignmentIcon sx={{ fontSize: 50 }} />
                    <Typography className="cardMenu" variant="body1" align='center' gutterBottom component="div">
                        Vendor Report
                    </Typography>            
                </Item>
            </Stack>
        </Box>
    </ThemeProvider>

  )
}

export default CardWrapper