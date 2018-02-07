import React, { Component } from 'react'
import { Grid, Embed, Label } from 'semantic-ui-react'

export default class Videos extends Component {
  render() {
    return (
      <div>
        <Grid centered columns={1} padded>
          <Grid.Column>
            <Label size='massive' color='green' ribbon>
              VIDEOS
            </Label>
          </Grid.Column>
        </Grid>
        <Grid centered columns={3} padded>
          <Grid.Column>
            <Embed
              autoplay={false}
              active={true}
              brandedUI
              color='white'
              hd={true}
              iframe={{
                allowFullScreen: true,
              }}
              id='3DPt4LocTbM'
              source='youtube'
            />
          </Grid.Column>
          <Grid.Column>
            <Embed
              autoplay={false}
              active={true}
              brandedUI
              color='white'
              hd={true}
              iframe={{
                allowFullScreen: true,
              }}
              id='3DPt4LocTbM'
              source='youtube'
            />
          </Grid.Column>
          <Grid.Column>
            <Embed
              autoplay={false}
              active={true}
              brandedUI
              color='white'
              hd={true}
              iframe={{
                allowFullScreen: true,
              }}
              id='3DPt4LocTbM'
              source='youtube'
            />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
