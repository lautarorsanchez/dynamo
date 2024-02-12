import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from "../components/Navbar"

export default function MyTeams() {
    return (
        <>
        <Navbar></Navbar>
      <Stack style={{marginTop: 1 + 'em'}} spacing={2} direction="row">
    
        <Button variant="outlined">Crear equipo</Button>
      </Stack>
      </>
    );
  }