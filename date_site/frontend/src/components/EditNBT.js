import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";


class EditNBT extends Component {
    constructor(props){
      super(props);
    }

    render(){
        return(
    <div class = "container">
    <div class="card-title primary-bg-colour">
      <h2>Edit File</h2>
        <div class="card-container secondary-bg-colour">
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
          <FormControl>
            <TextField
              required={true}
              type="text"
              defaultValue={""}
              inputProps={{
                isAuthenticated: PropTypes.bool,
                style: { textAlign: "center" },
              }}
            />
            <FormHelperText>
              <div align="center">File Name</div>
            </FormHelperText>
            <TextField
              required={true}
              type="text"
              defaultValue={""}
              inputProps={{
                isAuthenticated: PropTypes.bool,
                style: { textAlign: "center" },
              }}
            />
            <FormHelperText>
              <div align="center">Description</div>
            </FormHelperText>
            <TextField
              required={true}
              type="text"
              defaultValue={""}
              inputProps={{
                isAuthenticated: PropTypes.bool,
                style: { textAlign: "center" },
              }}
            />
            <FormHelperText>
              <div align="center">Version Min</div>
            </FormHelperText>
            <TextField
              required={true}
              type="text"
              defaultValue={""}
              inputProps={{
                isAuthenticated: PropTypes.bool,
                style: { textAlign: "center" },
              }}
            />
            <FormHelperText>
              <div align="center">Version Max</div>
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
          <Button
            color="secondary"
            variant="contained"
          >
            Delete
          </Button>
        </Grid>
        </Grid>
            </div>
            </div>
            </div>
        );
    }


}  

export default () => {
    return (
        <EditNBT />
    )
  }
