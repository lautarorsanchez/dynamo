import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from "../components/Navbar"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {CardMedia} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Modal } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default function MyTeams2() {
    return (
        <>
        <Navbar></Navbar>
    
      <Box> 
  <Card sx={{ maxWidth: 345 }}>
  <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://picsum.photos/seed/picsum/200/300"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          Equipo 1
        </Typography>
       
        <Typography variant="h6" color="text.secondary">
          @instagram
           <OpenInNewIcon></OpenInNewIcon>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Esta es la descripción del equipo proporcionada por el usuario
        </Typography>
   
      </CardContent>
     
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Typography variant="body2" color="text.secondary">
          Torneos que juega este equipo:
        </Typography>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <EmojiEventsIcon/>
        </ListItemAvatar>
        <ListItemText
          primary="Torneo +18"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Miércoles 18 a 23hs
              </Typography>
              
              {" — Olivos, Palermo."}
              <br></br><Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Inactivo / Activo
              </Typography>
            </React.Fragment>
          }
        />
        <Button>Ver jugadores</Button>
      </ListItem>
      <Divider variant="inset" component="li" />
     
    </List>
      <CardActions>
        <Button>Buscar nuevo torneo</Button>
        <Button size="small">Editar Equipo </Button>
        
      </CardActions>
    </Card>
    
  </Box>
  <Button variant="outlined">Crear equipo</Button>
      </>
    );
  }