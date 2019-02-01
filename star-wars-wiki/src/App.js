import React, { Component } from 'react';
import './App.css';
import NavMenu from './components/nav-menu.component';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';

class App extends Component {
  render() {
    return (
      <div>
        <NavMenu />
      </div>
    );
  }
}

export default App;
