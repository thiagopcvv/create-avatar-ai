import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        py: 2,
        backgroundColor: '#f0f0f0',
        mt: 'auto',
      }}
    >
      <Typography variant="body1">© 2024 Avatar Creator. Todos os direitos reservados.</Typography>
    </Box>
  );
};

export default Footer;
