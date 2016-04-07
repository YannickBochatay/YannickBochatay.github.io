"use strict";

import "grommet/grommet.min.css"

import React from 'react'
import ReactDOM from "react-dom"

import Router from "./components/Router"
import GlobalNav from "./components/GlobalNav"
import FlagIcon from "./components/FlagIcon"

import GrommetApp from "grommet/components/App"

import {addLocaleData, IntlProvider} from 'react-intl'

class MyApp extends React.Component {

  constructor(props) {

    super(props)

    this.state = {}

    this.mounted = false

    this.setLangToFrench()
  }

  componentDidMount() {

    this.mounted = true
  }


  setLangToFrench() {

    let localeData = require('react-intl/locale-data/fr')
    let messages = require("./localeData/fr")

    let state = {
      lang:"fr",
      messages : messages
    }

    addLocaleData(localeData)

    if (this.mounted) this.setState(state)
    else this.state = state
  }

  setLangToEnglish() {

    let that = this

    require.ensure([],function(require) {

      let localeData = require("react-intl/locale-data/en")
      let messages = require("grommet/messages/en")
      let messagesAPP = require("./localeData/en")

      addLocaleData(localeData)

      that.setState({
        lang:"en",
        messages : Object.assign(messages,messagesAPP)
      })
    })
  }

  render() {

    let iconStyle = {
      margin:"10px",
      display:"inline-block",
      cursor:"pointer"
    }

    let iconSelected = {
      ...iconStyle,
      "box-shadow":"0 0 4px 2px"
    }

    return (
      <IntlProvider locale={this.state.lang} messages={this.state.messages}>
        <GrommetApp>
          <FlagIcon country="fr" onClick={ this.setLangToFrench.bind(this) } style={ this.state.lang == "fr" ? iconSelected : iconStyle } />
          <FlagIcon country="gb" onClick={ this.setLangToEnglish.bind(this) } style={ this.state.lang == "en" ? iconSelected : iconStyle } />
          <GlobalNav/>
          <Router/>
        </GrommetApp>
      </IntlProvider>
    )
  }

}


ReactDOM.render( <MyApp/>, document.getElementById("content") )
