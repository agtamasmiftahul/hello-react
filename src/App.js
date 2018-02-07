import React from 'react'
import { Grid } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Nav from './components/nav/Navigation'
import Player from './components/players/Players'
import Headline from './components/news/Headline'
import Banner from './components/banner/Videos'
import Photos from './components/gallery/Photo'
import Maps from './components/info/Maps'
import Forms from './components/info/Form'

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

const About = () => (
  <Grid centered columns={1}>
    <Grid.Column>
      <Maps/>
    </Grid.Column>
    <Grid.Column>
      <Forms/>
    </Grid.Column>
  </Grid>
)

const Navigation = () => (
<Router>
  <Grid columns={1}>
    <Grid.Column>
      <Nav/>
    </Grid.Column>
    <Grid.Column>
      <Route exact path='/' component={Headlines}/>
      <Route path='/team' component={Players}/>
      <Route path='/gallery' component={Gallery}/>
      <Route path='/about' component={About}/>
    </Grid.Column>
</Grid>
</Router>
)

export default Navigation
