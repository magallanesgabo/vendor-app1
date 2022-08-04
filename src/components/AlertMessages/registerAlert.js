import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const userAlert = () => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="success">
        Your new password was sent to your email address. Please check your inbox.
      </Alert>    
    </Stack>
  );
};

export default userAlert;