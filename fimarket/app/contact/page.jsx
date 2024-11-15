"use client";

import React from 'react';
import { Container, Typography, Box, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoomIcon from '@mui/icons-material/Room';
import { useTheme } from '@mui/material/styles';

const ContactPage = () => {
  const theme = useTheme(); // Acceder al tema

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Contact
      </Typography>

      <Box mt={5}>
        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
          <RoomIcon color="primary" />
          <Typography variant="body1" color="black">
            Escolar 04360, C.U., Coyoacán, 04510 Ciudad de México, CDMX
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
          <PhoneIcon color="primary" />
          <Typography variant="body1" color="black">
            Phone: +525556220866
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
          <MailOutlineIcon color="primary" />
          <Typography variant="body1" color="black">
            Questions and comments:
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                backgroundColor: 'rgba(255, 224, 178, 0.3)', 
                padding: '4px 8px',
                ml: 1,
                borderRadius: '4px',
              }}
            >
              <a
                href="mailto:ingenierochupamatracas3000@gmail.com"
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: 'underline',
                  fontWeight: 'bold'
                }}
              >
                ingenierochupamatracas3000@gmail.com
              </a>
            </Box>
          </Typography>

        </Stack>
      </Box>

      <Box mt={4} display="flex" justifyContent="center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120475.88670245957!2d-99.29768026211887!3d19.3313833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce00015be0a713%3A0x3fc11681a8244370!2sFacultad%20de%20Ingenier%C3%ADa%20UNAM!5e0!3m2!1ses-419!2smx!4v1731566431734!5m2!1ses-419!2smx"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
      </Box>
    </Container>
  );
};

export default ContactPage;
