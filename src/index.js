import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Nav from './components/nav/Navigation.js'
import Banner from './components/banner/Videos.js'

ReactDOM.render(<Nav />, document.getElementById('nav'))
ReactDOM.render(<Banner />, document.getElementById('banner'))
ReactDOM.render(<App />,document.getElementById('players'))
