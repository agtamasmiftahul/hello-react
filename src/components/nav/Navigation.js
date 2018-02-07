import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import Link from './Link'
import Images from './Image'

export default class Navigation extends Component {
  render() {
    return (
      <Grid columns={1}>
        <Grid.Column>
            <Menu color='red' secondary>
              <Menu.Menu position='left'>
                <Images src='/images/brand/brand.webp' href='#'/>
              </Menu.Menu>
              <Link/>
            </Menu>
        </Grid.Column>
      </Grid>
    )
  }
}
