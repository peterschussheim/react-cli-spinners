import React from 'react'
import Spinner from 'react-cli-spinners'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { examples } from './utils'
import Button from './Button'
function buildRoutes(obj) {
  let routes = []
  for (const path in obj) {
    routes.push({
      path: `/${path}`,
      main: () => createExamples(obj[path])
    })
  }
  return routes
}

const routes = buildRoutes(examples)

function createExamples(listOfSpinners) {
  return listOfSpinners.map((k, i) => (
    <div
      style={{
        fontSize: '38px',
        border: '1px dotted black',
        margin: '1em',
        padding: '15px',
        gridColumnGap: '1em',
        gridRowGap: '1em',
        width: '65%',
        gridTemplateColumns: 'repeat(2,calc(50% - .5em))'
      }}
      key={i}
    >
      {k}:{' '}
      <Spinner
        style={{
          height: '100%',
          fontSize: '26px',
          paddingLeft: '5em',
          paddingTop: '2em',
          paddingBottom: '2em',
          fontFamily: 'Arial'
        }}
        type={k}
        key={i}
      />
      <Button text={k} key={`${i-k}`} type={k}/>
    </div>
  ))
}

function Home() {
  return (
    <p>
      Please browse the available sets in the sidebar to see different spinners
      included in this package.
    </p>
  )
}

const SidebarExample = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div
        style={{
          paddingLeft: 5,
          paddingRight: 5,
          padding: '20px',
          height: '50%',
          background: '#f0f0f0'
        }}
      >
        <ul style={{ listStyleType: 'none', padding: 10 }}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/dots">dots</Link>
          </li>
          <li>
            <Link to="/lines">lines</Link>
          </li>
          <li>
            <Link to="/stars">stars</Link>
          </li>
          <li>
            <Link to="/balloons">balloons</Link>
          </li>
          <li>
            <Link to="/bounces">bounces</Link>
          </li>
          <li>
            <Link to="/arrows">arrows</Link>
          </li>
          <li>
            <Link to="/misc">misc</Link>
          </li>
        </ul>
      </div>

      <div style={{ flex: 1, width: '75%', padding: '10px' }}>
        <Route key="home" path="/" exact component={Home} />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
)

export default SidebarExample
