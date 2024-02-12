import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navbar from '../components/Navbar';

export default function AddPlayer() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (  
    <>
      <Navbar></Navbar> 
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         <Typography component="h1" variant="h5">
            Añadir jugador
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Nombre"
              name="email"
              autoComplete="email"
              autoFocus
              type="text"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Apellido"
              name="email"
              autoComplete="email"
              autoFocus
              type="text"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Fecha de nacimiento"
              name="email"
              autoComplete="email"
              autoFocus
              type="date"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="whatsapp"
              label="WhatsApp"
              type="number"
              id="whatsapp"
             
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Agregar jugador
            </Button>
            // FALTA DNI
            // FALTA MAIL PARA DELEGADO
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 0.5, mb: 2 }}
              disabled
            >
              Terminar equipo
            </Button>
            
          </Box>
        </Box>
        
      </Container>
      </>
  );
}