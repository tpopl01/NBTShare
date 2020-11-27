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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  submit: {
    margin: theme.spacing(3),
  }
}));

const handleChange = (event) => {
  setAge(event.target.value);
};

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   const classes = this.props.classes;
   const age = this.props.age;
    return (
      <div class = "container">
        <div class="card-title primary-bg-colour">
        <h2>Discover</h2>
       
        <div class="card-container secondary-bg-colour">
      <Grid container spacing={1}>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button className={classes.submit}
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
      </Grid>
      </Grid>

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
  const [age, setAge] = React.useState('');
  return (
      <HomePage classes={classes} />
  )
}