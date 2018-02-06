import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Images from './Image'
import Description from './Description'

export default class News extends Component {
  render() {
    const {title, date, description, src, href} = this.props
    return (
      <Card fluid color='red'>
        <Images src={src}/>
        <Card.Content>
          <Card.Header textAlign='center'>
            <a href={href} target='_blank'>
              {title}
            </a>
          </Card.Header>
          <Card.Meta textAlign='center'>
            {date}
          </Card.Meta>
          <Card.Description>
            <Description description={description}/>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
