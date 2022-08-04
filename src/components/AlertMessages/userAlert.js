import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const userAlert = () => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="error">
        Invalid username and/or password. Please try again.
      </Alert>    
    </Stack>
  );
};

export default userAlert;