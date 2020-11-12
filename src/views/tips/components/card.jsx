import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { URL_API } from '../../../api';

const useStyles = makeStyles({
  root: {
    width: 345,
    height: "fit-content",
    marginBottom: 40
  },
  media: {
    height: 140,
    maxHeight: 400
  },
});

export default function TipsCard({tip}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={tip.imagen? `${URL_API}/file/${tip.imagen}` :require("../../../assets/perros/perro7.jpg")}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {tip.nombre}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {tip.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}