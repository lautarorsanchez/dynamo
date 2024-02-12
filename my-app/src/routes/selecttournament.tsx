import Navbar from "../components/Navbar";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


export default function SelectTournament(){
    return (
        <>
        <Navbar></Navbar>
        <Typography autoFocus component="h1" variant="h5" >Selecciona un torneo</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
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
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
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
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    <Button >Volver a mi equipo</Button>
    </>
    )
}