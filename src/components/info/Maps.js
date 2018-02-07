import React, { Component } from 'react'
import { Grid, Label } from 'semantic-ui-react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

export default class Maps extends Component {
  render() {
    const OldTrafford = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 53.4630589, lng: -2.2935288 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: 53.4630589, lng: -2.2935288 }} />}
      </GoogleMap>
    ))

    return (
      <div>
        <Grid centered columns={1} padded>
          <Grid.Column>
            <Label size='massive' color='yellow' ribbon>
              MAPS
            </Label>
          </Grid.Column>
        </Grid>
        <Grid centered columns={1} padded>
          <Grid.Column>
            <OldTrafford
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
