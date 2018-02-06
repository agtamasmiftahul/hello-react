import React, { Component } from 'react'
import Cards from './components/Card'
import { Grid } from 'semantic-ui-react'

export default class App extends Component {
  render() {
    return (
      <Grid centered columns={4} padded>
        <Grid.Column>
          <Cards
            src='https://cdn.images.dailystar.co.uk/dynamic/58/photos/606000/620x/Lionel-Messi-679738.jpg'
            name='Lionel Messi'
            age={30}
            position='Forward'
            nationality='Argentina'
          >
          </Cards>

        </Grid.Column>
        <Grid.Column>
          <Cards
            src='https://cdn.images.dailystar.co.uk/dynamic/58/photos/606000/620x/Lionel-Messi-679738.jpg'
            name='Lionel Messi'
            age={30}
            position='Forward'
            nationality='Argentina'
          >
          </Cards>

        </Grid.Column>
        <Grid.Column>
          <Cards
            src='https://cdn.images.dailystar.co.uk/dynamic/58/photos/606000/620x/Lionel-Messi-679738.jpg'
            name='Lionel Messi'
            age={30}
            position='Forward'
            nationality='Argentina'
          >
          </Cards>

        </Grid.Column>
        <Grid.Column>
          <Cards
            src='https://cdn.images.dailystar.co.uk/dynamic/58/photos/606000/620x/Lionel-Messi-679738.jpg'
            name='Lionel Messi'
            age={30}
            position='Forward'
            nationality='Argentina'
          >
          </Cards>

        </Grid.Column>
      </Grid>
    )
  }
}
