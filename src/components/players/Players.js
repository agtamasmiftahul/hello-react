import React, { Component } from 'react'
import Cards from './Card'
import { Grid, Embed, Label } from 'semantic-ui-react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Grid centered columns={1} padded>
          <Grid.Column>
            <Label size='massive' color='black' ribbon>
              PLAYERS
            </Label>
          </Grid.Column>
        </Grid>
        <Grid centered columns={6} padded>
          <Grid.Column mobile={10} tablet={6} computer={3}>
            <Cards
              src='/images/players/de-gea.jpeg'
              href='http://www.manutd.com/en/Players-And-Staff/First-Team/David-De-Gea.aspx'
              name='David De Gea'
              age={27}
              position='Goalkeeper'
              nationality='Spain'
            >
            </Cards>

          </Grid.Column>
          <Grid.Column mobile={10} tablet={6} computer={3}>
            <Cards
              src='/images/players/valencia.jpeg'
              href='http://www.manutd.com/en/Players-And-Staff/First-Team/Antonio-Valencia.aspx'
              name='Antonio Valencia'
              age={32}
              position='Defender'
              nationality='Ecuador'
            >
            </Cards>

          </Grid.Column>
          <Grid.Column mobile={10} tablet={6} computer={3}>
            <Cards
              src='/images/players/pogba.jpeg'
              href='http://www.manutd.com/en/Players-And-Staff/First-Team/Paul-Pogba.aspx'
              name='Paul Pogba'
              age={24}
              position='Midfielder'
              nationality='France'
            >
            </Cards>

          </Grid.Column>
          <Grid.Column mobile={10} tablet={6} computer={3}>
            <Cards
              src='/images/players/martial.jpeg'
              href='http://www.manutd.com/en/Players-And-Staff/First-Team/Anthony-Martial.aspx'
              name='Anthony Martial'
              age={22}
              position='Striker'
              nationality='France'
            >
            </Cards>

          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
