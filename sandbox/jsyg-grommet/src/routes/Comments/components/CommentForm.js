"use strict";

import React from "react"
import Form from "grommet/components/Form"
import FormField from "grommet/components/FormField"
import Button from "grommet/components/Button"
import { FormattedMessage } from "react-intl"


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

        <Form onSubmit={this.handleSubmit} pad={ {vertical:"large",horizontal:"none"} }>

          <fieldset>
            <legend>
              <FormattedMessage id="Leave a comment"/>
            </legend>

            <FormField label="Name" htmlFor="inputAuthor">
              <input id="inputAuthor" type="text" onChange={this.handleAuthorChange} value={this.state.author}/>
            </FormField>

            <FormField label="Say something..." htmlFor="inputText">
              <textarea id="inputText" onChange={this.handleTextChange} value={this.state.text}/>
            </FormField>

          </fieldset>

          <Button label="Valider" type="submit" onClick={ ()=>true }/>

        </Form>
      )
    }
}

export default CommentForm;
