import React from 'react'
import Spinner from 'react-cli-spinners'
import { wait } from './utils'

const spinnerStyle = {
  // fontSize: 16,
  padding: 'none',
  fontFamily: 'Arial',
  maxHeight: '100%',
  maxWidth: '100%'
}

const buttonStyle = {
  fontSize: 16,
  margin: 5,
  border: 'solid thin',
  cursor: 'pointer',
  outline: 'none',
  display: 'inline-block',
  padding: '10px 20px',
  textAlign: 'center',
  color: 'white',
  background: 'blue',
  maxHeight: '100%',
  maxWidth: '100%'
}

const disabledButtonStyle = {
  cursor: 'not-allowed',
  fontSize: 16,
  margin: 5,
  border: 'solid thin',
  outline: 'none',
  display: 'inline-block',
  padding: '10px 20px',
  textAlign: 'center',
  color: 'white',
  background: 'blue',
  maxHeight: '100%',
  maxWidth: '100%'
}

export default class Button extends React.Component {
  static defaultProps = {
    type: 'dots'
  }
  state = { loading: false, disabled: false }

  handleLoading = () => {
    this.setState(prevState => {
      return { loading: !prevState.loading, disabled: !prevState.disabled }
    })
  }

  showSpinner = async () => {
    this.handleLoading()
    const timer = await wait(3000)
    
    this.handleLoading()
  }

  renderChildren = () => {
    const { loading } = this.state
    const { text, type } = this.props
    const children = React.Children.map(this.props.children, (child, index) => {
      if (child === '') {
        return undefined
      } else if (typeof child === 'string') {
        return <span key={`text-${index}`}>{child}</span>
      }
      return child
    })
    return [
      loading ? <Spinner type={type} /> : null,
      loading && text != null ? null : <span key={`text-${type}`}>{text}</span>
    ]
  }
  render() {
    const { loading, disabled } = this.state
    return (
      <button
        type="button"
        style={disabled ? disabledButtonStyle : buttonStyle}
        onClick={this.showSpinner}
        disabled={disabled ? true : false}
      >
        {this.renderChildren()}
      </button>
    )
  }
}
