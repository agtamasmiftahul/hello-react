import React from 'react'
import ReactDOM from 'react-dom'
import Players from './components/players/Players'
import Nav from './components/nav/Navigation.js'
import Banner from './components/banner/Videos.js'
import Headline from './components/news/Headline.js'

ReactDOM.render(<Nav />, document.getElementById('nav'))
ReactDOM.render(<Banner />, document.getElementById('banner'))
ReactDOM.render(<Headline />, document.getElementById('headline'))
ReactDOM.render(<Players />,document.getElementById('players'))
