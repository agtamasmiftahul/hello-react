import React, { Component } from 'react'
import { Grid, Label } from 'semantic-ui-react'
import Gallery from 'react-photo-gallery'

export default class Photo extends Component {
  render() {
    const photos = [
      { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
      { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
      { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
      { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
      { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
      { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
      { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
      { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
    ];

    return (
    <div>
      <Grid centered columns={1} padded>
        <Grid.Column>
          <Label size='massive' color='blue' ribbon>
            PHOTOS
          </Label>
        </Grid.Column>
      </Grid>
      <Grid centered columns={1} padded>
        <Grid.Column>
          <Gallery photos={photos} onClick={this.openLightbox} />
        </Grid.Column>
      </Grid>
    </div>
    )
  }
}
