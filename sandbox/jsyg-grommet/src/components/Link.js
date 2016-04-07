"use strict";

import React from 'react'
import page from "page"

export default class Link extends React.Component {

  render() {

    let href = this.props.to
    let onClick = this.props.onClick

    function goTo(e) {
      e.preventDefault()
      page(href)
      if (onClick) onClick.call(this,e)
    }

    return (
      <a href={href} onClick={ goTo }>
        {this.props.children}
      </a>
    )
  }
}
