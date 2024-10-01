'use client';

import React from 'react';
import { Box, Grid2, Paper, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const cardsData = [
  { title: 'Gerar Avatar', description: 'Crie seu avatar personalizado', buttonText: 'Criar', color: '#FF6347' },
  { title: 'Estatísticas', description: 'Veja as estatísticas do site', buttonText: 'Ver Estatísticas', color: '#4682B4' },
  { title: 'Usuários', description: 'Gerencie os usuários', buttonText: 'Gerenciar', color: '#32CD32' },
];

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flexGrow: 1, padding: '2rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
        </motion.div>

        <Grid2 container spacing={4} mt={2}>
          {cardsData.map((card, index) => (
            <Box key={index}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                <Paper
                  sx={{
                    padding: '1.5rem',
                    backgroundColor: card.color,
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {card.description}
                  </Typography>
                  <Button variant="contained" sx={{ mt: 2, backgroundColor: 'white', color: card.color }}>
                    {card.buttonText}
                  </Button>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default Dashboard;
