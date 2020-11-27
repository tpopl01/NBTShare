import React, { Component } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));

class NBTPage extends Component {
    constructor(props){
      super(props);
      this.state = {
        name: 'Wheat Auto Farm',
        description: 'Tawr sedf edgv dergb rfghb. esdge edg edghha ssf.',
        download_count: 1,
        created_at: '16 September 2020',
        image: '',
      }
    }

    render(){
        const classes = this.props.classes;
        const { name, description, download_count, created_at, image } = this.state;
        return(
            <div class = "container">
            <div class="card-title primary-bg-colour">
              <h1>{name}</h1>
                <div class="card-container secondary-bg-colour">
                <Grid container spacing={1}>
                    <Grid item xs={6} align="center">
                    <CardMedia
                    className={classes.media}
                    image="/static/images/default.jpg"
                    title="Auto Wheat Farm"
                    />
                </Grid>
                <Grid item xs={6} align="center">
                  <p>Downloads: {download_count}</p>
                    <p>{created_at}</p>
                </Grid>
                <Grid item xs={12} align="center">
                    <div>{description}</div>
                </Grid>
                </Grid>
                    </div></div></div>
        );
    }


}  

export default () => {
    const classes = useStyles();
    return (
        <NBTPage classes={classes} />
    )
  }
