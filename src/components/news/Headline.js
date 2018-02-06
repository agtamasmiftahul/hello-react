import React, { Component } from 'react'
import { Grid, Card, Item, Image, Icon, Label } from 'semantic-ui-react'
import News from './News'

export default class Headline extends Component {
  render() {
    return (<div>
      <Grid centered columns={1} padded>
        <Grid.Column>
          <Label size='massive' color='red' ribbon>
            HEADLINES
          </Label>
        </Grid.Column>
      </Grid>
      <Grid centered columns={5} padded>
        <Grid.Column>
          <News
            title='Alexis Signing'
            date='20-1-2018'
            description='Next generation of magnificent number 7.'
            src='/images/players/alexis.jpeg'
            href='http://www.manutd.com/en/News-And-Features/Exclusive-Interviews/2018/Feb/chilean-journalist-bastian-llanos-discusses-alexis-sanchez-move-to-united.aspx'
          />
        </Grid.Column>
        <Grid.Column>
          <News
            title='Alexis Signing'
            date='20-1-2018'
            description='Next generation of magnificent number 7.'
            src='/images/players/alexis.jpeg'
            href='http://www.manutd.com/en/News-And-Features/Exclusive-Interviews/2018/Feb/chilean-journalist-bastian-llanos-discusses-alexis-sanchez-move-to-united.aspx'
          />
        </Grid.Column>
        <Grid.Column>
          <News
            title='Alexis Signing'
            date='20-1-2018'
            description='Next generation of magnificent number 7.'
            src='/images/players/alexis.jpeg'
            href='http://www.manutd.com/en/News-And-Features/Exclusive-Interviews/2018/Feb/chilean-journalist-bastian-llanos-discusses-alexis-sanchez-move-to-united.aspx'
          />
        </Grid.Column>
        <Grid.Column>
          <News
            title='Alexis Signing'
            date='20-1-2018'
            description='Next generation of magnificent number 7.'
            src='/images/players/alexis.jpeg'
            href='http://www.manutd.com/en/News-And-Features/Exclusive-Interviews/2018/Feb/chilean-journalist-bastian-llanos-discusses-alexis-sanchez-move-to-united.aspx'
          />
        </Grid.Column>
        <Grid.Column>
          <News
            title='Alexis Signing'
            date='20-1-2018'
            description='Next generation of magnificent number 7.'
            src='/images/players/alexis.jpeg'
            href='http://www.manutd.com/en/News-And-Features/Exclusive-Interviews/2018/Feb/chilean-journalist-bastian-llanos-discusses-alexis-sanchez-move-to-united.aspx'
          />
        </Grid.Column>
      </Grid>
    </div>
    )
  }
}