"use strict";

import SVGEditor from "jsyg-fulleditor"
import Path from "jsyg-path"
import React from "react"
import Paper from 'material-ui/lib/paper';

class Mockup extends React.Component {

  createPath() {

    return new Path()
      .moveTo(300,0)
      .lineTo(600,300)
      .lineTo(300,600)
      .lineTo(0,300)
      .lineTo(300,0)
      .fill("violet")
  }

  componentDidMount() {

    this.svgEditor = new SVGEditor( this.refs.svg )

    this.svgEditor.editableShapes = "> *"

    this.svgEditor.enable()

    this.svgEditor.enableMouseWheelZoom()

    this.svgEditor.load("https://upload.wikimedia.org/wikipedia/commons/5/57/React.js_logo.svg?uselang=fr")
    .then(function() {

    })
/*
    this.svgEditor.newDocument(600,600)

    this.svgEditor.insertElement( this.createPath() )

    */
  }

  componentWillUnmount() {

    this.svgEditor.disable()

  }

  render() {

    let styles = {
      div : {
        height:"85vh",
        width:"100%"
      },
      svg : {
        backgroundColor:"#eee"
      }
    }

    return (
      <Paper zDepth={2}>
        <div style={styles.div}>
          <svg id="svgEditor" width="100%" height="100%" ref="svg" style={styles.svg}></svg>
        </div>
      </Paper>
    )
  }
}

module.exports = Mockup

export default Mockup
