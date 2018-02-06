import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Link extends Component {
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
        <Menu.Item name='HOME' active={activeItem === 'HOME'} onClick={this.handleItemClick}/>
        <Menu.Item name='SCHEDULE' active={activeItem === 'SCHEDULE'} onClick={this.handleItemClick}/>
        <Menu.Item name='TEAM' active={activeItem === 'TEAM'} onClick={this.handleItemClick}/>
        <Menu.Item name='ABOUT' active={activeItem === 'ABOUT'} onClick={this.handleItemClick}/>
      </Menu.Menu>
    )
  }
}
