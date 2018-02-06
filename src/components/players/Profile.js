import React, { Component } from 'react'
import { List } from 'semantic-ui-react'

export default class Profile extends Component {
  render() {
    const {name, age, position, nationality} = this.props
    return (
      <List>
        <List.Item>
          <List.Icon name='user circle'/>
          <List.Content>{name}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='male'/>
          <List.Content>{age}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='tasks'/>
          <List.Content>{position}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='world'/>
          <List.Content>{nationality}</List.Content>
        </List.Item>
      </List>
    )
  }
}
