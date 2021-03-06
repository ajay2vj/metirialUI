import React, { Component } from "react";
import PropTypes from 'prop-types';

import { AppBar, IconButton, MenuItem, Drawer } from 'material-ui';
import { NavigationClose } from 'material-ui/svg-icons';

import Logged from './containers/Logged';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <div>
        <AppBar
          title="Food Factory"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementLeft={this.state.open ? <IconButton><NavigationClose /></IconButton> : null}
          iconElementRight={<Logged />}
          style={{paddingLeft: this.state.open ? 224 : 24}}
        />
        <Drawer
          docker={false}
          open={this.state.open}
          width={200}
        >
          <MenuItem>Breakfast</MenuItem>
          <MenuItem>Cameron</MenuItem>
        </Drawer>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired
};

export default MainLayout;
