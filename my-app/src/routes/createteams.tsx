import Navbar from "../components/Navbar";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';


export default function CreateTeams(){
    return(
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <SportsSoccerIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Crear equipo
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Nombre del equipo"
              label="Nombre del equipo"
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Instagram"
              label="Instagram"
              type="text"
              id="Instagram del equipo"
              autoComplete="current-password"
            />
          <TextField
              margin="normal"
              required
              fullWidth
              name="Descripcion"
              label="Descripcion del equipo"
              type="text"
              multiline={true}
              id="Instagram del equipo"
       
            />
            <TextField
              margin="normal"
              fullWidth
              name="Descripcion"
              label="Escudo del equipo"
              type="file"
              id="Instagram del equipo"
              
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Finalizar
            </Button>
          </Box>
        </Box>
        
      </Container>
    </>
    )
} 