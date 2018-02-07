import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import Link from './Link'
import Images from './Image'

export default class Navigation extends Component {
  render() {
    return (
      <Grid columns={1}>
        <Grid.Column>
          <Segment color='red' basic={true} inverted>
            <Menu size='large' inverted secondary>
              <Menu.Menu position='left'>
                <Images src='/images/favicon/favicon.png' href='#'/>
              </Menu.Menu>
              <Link/>
            </Menu>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
