import React, { Component } from 'react'
import Sidebar from './Sidebar'

const contactStyles = {
  textDecoration: 'none',
  margin: '3px'
}

const Contact = () => (
  <div>
    <small>
      <b>
        <a
          style={contactStyles}
          target="ps"
          href="https://peterschussheim.com/"
        >
          Peter Schussheim
        </a>{' '}
      </b>
      <b>
        <div>
          <a
            style={contactStyles}
            target="src"
            href="https://github.com/peterschussheim/react-cli-spinners"
          >
            View source
          </a>
        </div>
      </b>
    </small>
  </div>
)

class App extends Component {
  render() {
    return (
      <div
        style={{
          fontFamily: 'Arial'
        }}
      >
        <div style={{ margin: '1px' }}>
          <h1>
            <a style={{ textDecoration: 'none' }} href="/">
              react-spinners
            </a>{' '}
          </h1>
          <h2>gallery</h2>
        </div>
        <Contact />
        <Sidebar />
      </div>
    )
  }
}

export default App
