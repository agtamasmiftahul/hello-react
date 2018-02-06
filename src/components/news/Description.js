import React, { Component } from 'react'

export default class Description extends Component {
  render() {
    const { description } = this.props
    return (
      <p>{description}</p>
    )
  }
}
