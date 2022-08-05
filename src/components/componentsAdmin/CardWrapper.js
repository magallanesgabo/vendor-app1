import React from 'react'
import {
    Box,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import { useTheme, styled, ThemeProvider} from '@mui/material/styles';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import LockResetIcon from '@mui/icons-material/LockReset';
import SyncLockIcon from '@mui/icons-material/SyncLock';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { Link } from 'react-router-dom';

const CardWrapper = () => {

    const theme = useTheme();

    const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.secondary.main,
    }));


  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%' }}>
            <Stack spacing={1}>
                <Item component={Link} className="cardMenu" to={'/admin/send_sms'}>
                    <ForwardToInboxIcon fontSize="large" />
                    <Typography variant="body1" align='center' gutterBottom component="div">
                        Send SMS Update
                    </Typography> 
                </Item>
                <Item component={Link} className="cardMenu" to={'/admin/resend_passport'}>
                    <LockResetIcon fontSize="large" />
                    <Typography className="cardMenu" variant="body1" align='center' gutterBottom component="div">
                        Resend passport by email
                    </Typography>            
                </Item>
                <Item component={Link} className="cardMenu" to={'/admin/resend_passport_sms'}>
                    <SyncLockIcon fontSize="large" />
                    <Typography className="cardMenu" variant="body1" align='center' gutterBottom component="div">
                        Resend Passport by SMS
                    </Typography>            
                </Item>
                <Item component={Link} className="cardMenu" to={'/admin/report'}>
                    <ContentPasteIcon fontSize="large" />
                    <Typography className="cardMenu" variant="body1" align='center' gutterBottom component="div">
                        Voting Report
                    </Typography>            
                </Item>
            </Stack>
        </Box>
    </ThemeProvider>

  )
}

export default CardWrapper