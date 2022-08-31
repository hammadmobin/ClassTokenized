import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
 //  const file = course.metadata;
  return (
    <Card sx={{ maxWidth: 345}} >
      <CardMedia
        component="img"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdI0JuD_xKwLlJon0zgppVtddiJqiKf2Ix8A&usqp=CAU"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        {props.courseID}
        <Typography variant="body2" color="text.secondary">
        {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.fees} ETH</Button>
        <Button size="small">Buy NFT</Button>
      </CardActions>
    </Card>
  );
}
