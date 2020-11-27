import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';



export default class Header extends Component {
  constructor(props){
    super(props);
   // const { isAuthenticated, user } = this.props.auth;
    this.state={
      isOpen: false,
    }
    this.handleMenuPress = this.handleMenuPress.bind(this);
  }

 // static propTypes = {
 //   auth: PropTypes.object.isRequired,
  //  logout: PropTypes.func.isRequired,
 // };
handleMenuPress(){
  this.setState({'isOpen':!this.state.isOpen});
}

  render() {

const guestLinks = (
  <div>
      <Button color="inherit" to="/register" component={Link}>
        Register
      </Button>
      <Button color="inherit" to="/login" component={Link}>
        Login
      </Button>
  </div>
);

const authLinks = (
  <div>
    <Button color="inherit" onClick={this.props.logout} >
      Logout
    </Button>
            <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="false"
            to="/login"
            component={Link}
            color="inherit"
          >
          <AccountCircle />
          </IconButton>
  </div>
);
  const { isOpen } = this.state;
    return (
      <div class="wide">
      <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon onClick={this.handleMenuPress} />
        </IconButton>
        <Button color="inherit"  to="/" component={Link} >
        <Typography variant="h6" >
          Minecraft NBT Share
        </Typography>
        </Button>
        <div class="align-right">
        {this.props.isAuthenticated ? authLinks : guestLinks}
        </div>
      </Toolbar>
    </AppBar>

    <div>
      <Drawer anchor='left' open={isOpen} onClose={this.handleMenuPress} >
      <List>
        <ListItem>
          <ListItemIcon><InboxIcon></InboxIcon></ListItemIcon>
          <ListItemText primary="Top Files"></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><InboxIcon></InboxIcon></ListItemIcon>
          <ListItemText primary="Top Files"></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><InboxIcon></InboxIcon></ListItemIcon>
          <ListItemText primary="Top Files"></ListItemText>
        </ListItem>
      </List>
      </Drawer>
    </div>
    </div>
    );
  }
}

//const mapStateToProps = (state) => ({
 // auth: state.auth,
//});

//export default connect(mapStateToProps, { logout })(Header);