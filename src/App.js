import React from 'react'
import { Grid } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route } from 'react-router-dom'
import Nav from './components/nav/Navigation'
import Player from './components/players/Players'
import Headline from './components/news/Headline'
import Banner from './components/banner/Videos'
import Photos from './components/gallery/Photo'

const Players = () => (
  <Player/>
)

const Headlines = () => (
  <Headline/>
)

const Gallery = () => (
  <Grid centered columns={1}>
    <Grid.Column>
      <Photos/>
    </Grid.Column>
    <Grid.Column>
      <Banner/>
    </Grid.Column>
  </Grid>
)

const BasicExample = () => (
<Router>
  <Grid columns={1}>
    <Grid.Column>
      <Nav/>
    </Grid.Column>
    <Grid.Column>
      <Route exact path='/' component={Headlines}/>
      <Route path='/team' component={Players}/>
      <Route path='/gallery' component={Gallery}/>
    </Grid.Column>
</Grid>
</Router>
)

export default BasicExample
