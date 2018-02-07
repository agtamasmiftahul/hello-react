import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'

export default class Links extends Component {
  state = { activeItem : 'HOME' }
  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem : name
    })
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu.Menu position='right'>
        <Link to='/'><Menu.Item name='HOME' active={activeItem === 'HOME'} onClick={this.handleItemClick}/></Link>
        <Link to='/team'><Menu.Item name='TEAM' active={activeItem === 'TEAM'} onClick={this.handleItemClick}/></Link>
        <Link to='/gallery'><Menu.Item name='GALLERY' active={activeItem === 'GALLERY'} onClick={this.handleItemClick}/></Link>
        <Link to='/about'><Menu.Item name='ABOUT' active={activeItem === 'ABOUT'} onClick={this.handleItemClick}/></Link>
      </Menu.Menu>


    )
  }
}
