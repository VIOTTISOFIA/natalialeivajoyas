
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardProduct = ({img, name, description}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="Aros"  height="140" image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  className="btn-carrito" size="small">Agregar al Carrito</Button>
        <Button size="small">Más información</Button>
      </CardActions>
    </Card>
  );
}

export default CardProduct;
