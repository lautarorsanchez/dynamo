import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from '../components/Navbar';
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


export default function Confirmation() {
    function createData(
        name: string,
        calories: number,
        fat: string,
        carbs: number,
        protein: number,
      ) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Juan Perez', 38000000, '29/03/1995', 24, 4.0),
        createData('Juan Perez', 38000000, '29/03/1995', 37, 4.3),
        createData('Juan Perez', 38000000, '29/03/1995', 24, 6.0),
        createData('Juan Perez', 38000000, '29/03/1995', 67, 4.3),
        createData('Juan Perez', 38000000, '29/03/1995', 49, 3.9),
      ];
    return(
        <>
        <Navbar/>
        //AÑADIR DATOS DEL TORNEO AL QUE SE ESTA INSCRIBIENDO
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Jugador</TableCell>
            <TableCell align="right">DNI</TableCell>
            <TableCell align="right">Fecha de nacimiento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Container component="main" maxWidth="xs">
    <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              
              fullWidth
              id="email"
              label="Color de camiseta titular"
              name="email"
              autoFocus
              type="text"
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Color de camiseta suplente"
              type="password"
              id="password"
              
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar registro
            </Button>
            
          </Box>
      </Container>
        </>
    )
}