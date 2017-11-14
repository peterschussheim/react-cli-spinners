import React, { Component } from 'react'
import Spinner from '../../dist/index'
// import Spinner from 'react-spinner'

const appStyle = {
  fontFamily: 'Arial',
  display: 'grid',
  gridTemplateColumns: '400px',
  gridColumnGap: '2em',
  padding: '1.25em 1.25em 1.25em 1.25em'
}

const wrapperStyle = {
  border: '1px solid #ddd'
}

const divStyle = {
  border: '1px dotted black',
  margin: '1em',
  padding: '15px',
  gridColumnGap: '1em',
  gridRowGap: '1em',
  gridTemplateColumns: 'repeat(2,calc(50% - .5em))'
}

const spinnerStyle = {
  paddingLeft: '55px',
  paddingTop: '55px',
  paddingBottom: '55px',
  fontFamily: 'Arial'
}

// function createExamples(listOfSpinners) {
//   return Object.keys(listOfSpinners).map((k, i) => (
//     <div style={divStyle} key={i}>
//       {k}: <Spinner style={spinnerStyle} type={k} key={i} />
//     </div>
//   ))
// }

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <div style={{ margin: '1px' }}>
          <h1>react-spinners</h1>
          <h2>examples</h2>
        </div>
        <div style={wrapperStyle}>
          <Spinner type="arc" />
        </div>
      </div>
    )
  }
}

export default App
