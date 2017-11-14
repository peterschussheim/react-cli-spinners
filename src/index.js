import React from 'react'
import spinners from './spinners.json'

class Spinner extends React.Component {
  constructor(props) {
    super(props)
    this.state = { spinner: this.getSpinnerType(props), frame: 0 }
    this.getSpinnerType = this.getSpinnerType.bind(this)
  }

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.tick(),
      this.state.spinner.interval
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  tick() {
    this.setState({
      frame:
        this.state.frame + 1 === this.state.spinner.frames.length
          ? 0
          : this.state.frame + 1
    })
  }

  getSpinnerType(props) {
    const spinnerType = props.type ? props.type : 'dots'
    const spinner = spinners[spinnerType]
    return spinner
  }

  render() {
    const { spinner, frame } = this.state
    return <span {...this.props}>{spinner.frames[frame]}&nbsp;</span>
  }
}

export default Spinner
