import React from 'react'

class Loading extends React.Component {

  constructor(props) {

    super(props)

    this.state = { text: "loading..." }
  }

  componentDidMount() {

    let that = this

    this.interval = window.setInterval( ()=> that.setState({text: this.state.text+"."}), 10)
  }

  componentWillUnmount() {

    window.clearInterval(this.interval)
  }

  render() {

    return <div>{this.state.text}</div>
  }

}

export default Loading
