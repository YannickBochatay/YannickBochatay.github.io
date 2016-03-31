import React from 'react'
import Welcome from './Welcome'
import GlobalNav from './GlobalNav'

import injectTapEventPlugin from 'react-tap-event-plugin'
import "roboto-fontface"

let style = {
  "fontFamily":"roboto"
}

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


class App extends React.Component {

  render() {

    return (
      <div>
        <GlobalNav />
        <div style={style}>
        {this.props.children || <Welcome/>}
        </div>
      </div>
    )
  }
}

module.exports = App
