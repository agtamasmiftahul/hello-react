import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

export default class Images extends Component {
  render() {
    return (<Image src={this.props.src}/>)
  }
}
