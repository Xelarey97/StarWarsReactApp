import React from "react";
import Drawer from "@material-ui/core/Drawer";
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

export class NavDrawer extends React.Component {
  render() {
    return (
      <Drawer
        anchor="left"
        open={this.props.drawerOpened}
        onClose={this.props.toggleDrawer(false)}
      >
        <div
          onClick={this.props.toggleDrawer(false)}
          onKeyDown={this.props.toggleDrawer(false)}
        >
          <ListItem>
            <ListItemText primary="HOLA MUNDO"/>
            <Button variant="contained" color="primary">
                Welcome Material UI
            </Button>
          </ListItem>
        </div>
      </Drawer>
    );
  }
}

export default NavDrawer;