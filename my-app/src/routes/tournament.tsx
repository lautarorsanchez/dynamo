import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {CardMedia} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
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
import Navbar from '../components/Navbar';


export default function Tournament() {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

  return (
    <>
    <Navbar></Navbar>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Inscribirse a un torneo
        </Typography>
        <Typography variant="h5" component="div">
          Torneo +18 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Miércoles 19 a 23hs - F5 - Olivos
        </Typography>
        <Typography variant="body2">
          Información puntual sobre el torneo proporcionada por la asociación.
        
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Typography variant="h6" component="div">
          Sedes
        </Typography>
      <ListItem alignItems="flex-start" onClick={handleOpen}>
        <ListItemAvatar>
        <EmojiEventsIcon/>
        </ListItemAvatar>
        <ListItemText
          primary="Sede 1"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Calle X 1234. Olivos, Buenos Aires.
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
      </CardContent>
      <CardActions>
        <Button size="small">Inscribirse</Button>
      </CardActions>
    </Card>
    <Button size="small">Volver a Torneos</Button>
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}> 
  <Card sx={{ maxWidth: 345 }}>
  <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://picsum.photos/seed/picsum/200/300"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          Sede 1
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Dirección sede
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Esta es la descripción de la sede proporcionada por la asociación
        </Typography>
   
      </CardContent>
      <CardActions>
        <Button size="small">Ver en Google Maps <OpenInNewIcon></OpenInNewIcon></Button>
        
      </CardActions>
    </Card>
    
  </Box>
</Modal>
    </>
  );
}