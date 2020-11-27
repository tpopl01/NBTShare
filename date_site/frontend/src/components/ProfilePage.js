import React, { Component } from 'react';

import Grid from "@material-ui/core/Grid";

export default class ProfilePage extends Component {
    constructor(props){
      super(props);
      this.state = {
        name: 'Matt',
        description: 'Tawr sedf edgv dergb rfghb. esdge edg edghha ssf.',
        download_count: 1,
        created_at: '16 September 2020',
        image: '',
      }
    }

    render(){
        const { name, description, download_count, created_at, image } = this.state;
        return(
            <div class = "container">
            <div class="card-title primary-bg-colour">
              <h1>{name}</h1>
                <div class="card-container secondary-bg-colour">
                <Grid item xs={12} align="center">
                    <div>{description}</div>
                </Grid>
                </div></div></div>
        );
    }


}  