import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    avatar: {
      backgroundColor: red[500],
    },
      paper: {
          padding: theme.spacing(2),
        margin: theme.spacing(1),
      },
  }));
  

class Comments extends Component {
    constructor(props){
      super(props);

    }

    render(){
        const classes = this.props.classes;
        return(
            <div class = "container">
            <div class="card-title primary-bg-colour">
              <h2>Comments</h2>
                <div class="card-container secondary-bg-colour">
            <Paper className={classes.paper}>
                <Grid container spacing={1}>
                    <Grid item>
                    <Avatar aria-label="user" className={classes.avatar}>
                        R
                    </Avatar>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={1}>
                        <Grid item >
                            <Typography variant="body2" gutterBottom>Matt</Typography>
                        </Grid> 
                        <Grid item>
                        <Typography variant="body2" color="textSecondary" gutterBottom>Today at 5:42PM</Typography>
                        </Grid>
                        </Grid>
                        <Typography variant="body2" gutterBottom>How artistic!</Typography>
                    </Grid>
                </Grid>
                </Paper>
                </div></div></div>
        );
    }


}  

export default () => {
    const classes = useStyles();
    return (
        <Comments classes={classes} />
    )
  }