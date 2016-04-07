import React from "react"
import "flag-icon-css"

export default class FladIcon extends React.Component {

  render() {

    return (
      <span className={ "flag-icon flag-icon-" + this.props.country } style={ this.props.style } {...this.props}></span>
    )
  }
}
