import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// call render method to render to browser, args are component to render (App) and the place to render it (html in index.html - find it with querySelector and its id)
ReactDOM.render(<App />, document.querySelector('#output'))
