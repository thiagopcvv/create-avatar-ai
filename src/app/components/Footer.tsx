import { Box, Typography } from '@mui/material';

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
      <Typography variant="body1">© 2024 Create Avatar AI. Todos os direitos reservados.</Typography>
    </Box>
  );
};

export default Footer;
