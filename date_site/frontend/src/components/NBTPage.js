import React, { Component } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

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
        description: 'sfwe dsgf eg ew gerw gds gsedg r rhtr htr Tawr sedf edgv dergb rfghb. esdge edg edghha ssf.',
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
              <h2>{name}</h2>
                <div class="card-container secondary-bg-colour">
                <Grid container spacing={1}>
                    <Grid item xs={6} align="center">
                    <CardMedia
                    className={classes.media}
                    image="/static/images/default.jpg"
                    title="Auto Wheat Farm"
                    />
                </Grid>
                    <Grid item align="left">
                        <Grid container spacing={1}>
                        <Grid item align="left" xs={12}>
                            <Typography variant="body2">By Matt</Typography>
                            <Typography variant="body2" color="textSecondary">At: {created_at}</Typography>
                        <Typography>Likes: 10</Typography>
                        <Typography>Versions: 1.62 - 1.74</Typography>
                        </Grid>
                        </Grid>
                        <Grid item align="center">
                            <Button
                                color="primary"
                                variant="contained"
                            >
                                Download
                            </Button>
                            <Typography variant="body2" color="textSecondary">Downloads: {download_count}</Typography>
                        </Grid>
                </Grid>
                <Grid item xs={12} align="left">
                    <h3>About</h3>
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
