import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    avatar: {
      backgroundColor: red[500],
    },
  }));
  

class Comments extends Component {
    constructor(props){
      super(props);

    }

    render(){
        return(
            <div class = "container">
            <div class="card-title primary-bg-colour">
              <h1>Comments</h1>
                <div class="card-container secondary-bg-colour">
                <Grid item xs={12} align="center">
                    <Grid item xs={3} align="center">
                    <Avatar aria-label="user" className={classes.avatar}>
                        R
                    </Avatar>
                    </Grid>
                    <Grid item xs={9} align="center">
                        <small>Today at 5:42PM</small>
                        <p>Matt</p>
                        <p>How artistic!</p>
                    </Grid>
                </Grid>
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