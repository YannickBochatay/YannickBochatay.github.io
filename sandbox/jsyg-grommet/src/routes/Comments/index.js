"use strict";

import "whatwg-fetch"
import React from "react"
import CommentList from "./components/CommentList"
import CommentForm from "./components/CommentForm"
import { FormattedMessage } from "react-intl"
import Article from "grommet/components/Article"
import Header from "grommet/components/Header"
import Section from "grommet/components/Section"

class Comments extends React.Component {

    constructor(props) {

      super(props)

      this.state = {
        data:[]
      }

      this.url = "./src/routes/Comments/data.json"
    }

    loadCommentsFromServer() {

        let that = this

        return fetch(this.url)
        .then(function(response) {

            return response.json()
        })
        .then(function(data) {

            that.setState({data: data})
        })
        .catch(function(e) {

            console.error(that.props.url,e)
        });
    }

    handleCommentSubmit(comment) {

        let comments = this.state.data

        comment.id = Date.now()

        this.setState({ data : comments.concat([comment]) })

        /*
        //var that = this;
        return fetch(this.url,{
            method:"post",
            body:JSON.stringify(comment)
        })
        .catch(function(e) {
            console.error(that.props.url,e)
        });
        */
    }

    componentDidMount() {

        this.loadCommentsFromServer()
    }

    render() {
        return (
          <Article pad="medium">
            <Header>
                <FormattedMessage id="Comments"/>
            </Header>
            <Section>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
            </Section>
          </Article>
        );
    }

}

Comments.contextTypes = {
  router: React.PropTypes.object
}

module.exports = Comments

export default Comments
