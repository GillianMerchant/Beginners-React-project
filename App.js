import React, { Component } from 'react'
import './style.css'

// a class based component for first example but function-based component is more normal now
// extend the React.Component class like "class App extends React.Component", or with a named import like we have here; bit more concise
class App extends Component {
  constructor(props) {
    // call the parent class's constructor (Component's constructor)
    super(props)
    // set the state's display name property (and maybe value that we'll use in the message shortly)
    // this is the only way you can set a state directly - inside of a constructor function
    this.state = {
      displayName: '',
      name: '',
    }
  }

  // event handler method for change on name input - the argument gets the name from the event object and sets the name state
  // so essentially it updates the state's name with whatever text the user has entered; setState() is React's state updating method.
  handleChange = (evt) => {
    this.setState({
      name: evt.target.value,
    })
  }

  handleClick = (evt) => {
    this.setState({
      displayName: this.state.name,
    })
  }

  // class-based components have to use a render method
  // you can only one return ONE element so wrap multiple elements eg in a div, React.Fragment tags, or just empty open and closing brackets which is shorthand
  render() {
    return (
      //set up the input and button as controlled components - ie React is responsible
      // 1 - user enters a name which is stored in state.name
      // 2 - user clicks button which triggers display name property to be set to the value in state.name
      // 3 -  display name is used in the para so we can see it printed on screen
      // 4 - the OR statement fills in a default value if display.Name is not true.
      <>
        <h1> Welcome to the app yo</h1>
        <p>
          {' '}
          A first shot at React. Using setState() to save an input value to
          state so it can be retrieved.
        </p>
        <p>
          {' '}
          Hi there,{' '}
          {this.state.displayName || "we haven't been introduced yet!"}
        </p>

        <input value={this.state.name} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Update name</button>
      </>
    )
  }
}

export default App
