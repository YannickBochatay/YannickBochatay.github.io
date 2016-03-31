"use strict";

import React from "react"
import FontIcon from 'material-ui/lib/font-icon'
import Button from 'material-ui/lib/raised-button'
import Paper from 'material-ui/lib/paper'
import TextField from 'material-ui/lib/text-field'


class CommentForm extends React.Component {

    constructor(props) {

      super(props);
      this.state = {author:"",text:""}

      this.handleAuthorChange = this.handleAuthorChange.bind(this)
      this.handleTextChange = this.handleTextChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSomethingChange() {

      if (this.props.onCommentChange) this.props.onCommentChange(true)
    }

    handleAuthorChange(e) {

        this.handleSomethingChange()
        this.setState({author:e.target.value})
    }

    handleTextChange(e) {

        this.handleSomethingChange()
        this.setState({text:e.target.value})
    }

    handleSubmit(e) {

        e.preventDefault();

        var author = this.state.author.trim()
        var text = this.state.text.trim()

        if (!text || !author) return

        if (this.props.onCommentChange) this.props.onCommentChange(false)
        if (this.props.onCommentSubmit) this.props.onCommentSubmit({author:author,text:text})

        this.setState({author:"",text:""})
    }

    render() {

      return (
        <Paper zDepth={1} style={ {marginTop:50,padding:20} }>
          <form onSubmit={this.handleSubmit}>
            <h2>Leave a comment</h2>
            <TextField
              floatingLabelText="Name"
              onChange={this.handleAuthorChange}
              value={this.state.author}
            />
            <br/>
            <TextField
              floatingLabelText="Say something..."
              multiLine={true}
              onChange={this.handleTextChange}
              value={this.state.text}
            />
            <br/>
            <Button
              label="Valider"
              type="submit"
              secondary={true}
              icon={<FontIcon className="muidocs-icon-custom-github"/>}
            />
          </form>
        </Paper>
      );
    }
}

export default CommentForm;
