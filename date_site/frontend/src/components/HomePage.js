import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   // const classes = useStyles();
   const classes = this.props.classes;
    return (
      <div class = "container">
        <div class="card-title primary-bg-colour">
        <h1>Discover</h1>
        <div class="card-container secondary-bg-colour">
          <div class="card">
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="user" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Auto Wheat Farm"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/default.jpg"
          title="Auto Wheat Farm"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Fully automated wheat farm using villagers.
          </Typography>
        </CardContent>
      </Card>
      </div>

      <div class="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="user" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Auto Wheat Farm"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/default.jpg"
          title="Auto Wheat Farm"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Fully automated wheat farm using villagers.
          </Typography>
        </CardContent>
      </Card>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default () => {
  const classes = useStyles();
  return (
      <HomePage classes={classes} />
  )
}