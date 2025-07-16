import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

export default function Prayer(props) {


  return (
    <Card sx={{ Width: "'100%'" }}>
      <CardActionArea style={{textAlign:"center"}}>
        <CardMedia
          component="img"
          height="140"
          image={props.imagg}
          alt="green iguana"
          className="Image-Prayer"
       
          
        />
        <CardContent>
          <h2 style={{color:"#208391ff"}} gutterBottom variant="h5" component="div">
            {props.title}
          </h2>
          <h1 variant="h4" style={{color:"#3c998dff"}} sx={{ color: 'text.secondary' }}>
            {props.time}
          </h1>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent:"center"}} style={{margin:"0"}}>
            <Link variant="contained" to={`/prayer/${props.route}`}  ><h5>اعرف اكثر</h5></Link>
      </CardActions>
    </Card>
  );
}
