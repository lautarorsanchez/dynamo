import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';

export default function TeamId() {
  return (
    <>
    <Navbar></Navbar>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 280 }}
        image="https://picsum.photos/id/237/200/300"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mi Equipo
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Instagram
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Esta es la descripción del equipo proporcionada por el usuario
        </Typography>
   
      </CardContent>
      <CardActions>
        <Button size="small">Jugar un torneo</Button>
        <Button  size="small" color="error">Eliminar equipo</Button>
      </CardActions>
    </Card>
    </>);
}
