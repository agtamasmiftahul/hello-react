import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import Link from './Link'
import Images from './Image'

export default class Navigation extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column>
            <Menu color='red' pointing secondary>
              <Menu.Menu position='left'>
                <Images src='/images/favicon/favicon.png'/>
              </Menu.Menu>
              <Link />
            </Menu>
        </Grid.Column>
      </Grid>
    )
  }
}
