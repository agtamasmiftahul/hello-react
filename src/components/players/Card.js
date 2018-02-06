import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Profile from './Profile'
import Images from './Image'

export default class Cards extends Component {
  render() {
    const {src, href, name, age, position, nationality} = this.props
    return (
      <Card fluid color='black' fluid={true}>
        <Images src={src}/>
        <Card.Content>
          <Card.Header textAlign='center'>
            <a href={href} target='_blank'>
              {name}
            </a>
          </Card.Header>
          <Card.Meta textAlign='center'>
            {nationality}
          </Card.Meta>
          <Card.Description>
            <Profile name={name} age={age} position={position} nationality={nationality}/>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
