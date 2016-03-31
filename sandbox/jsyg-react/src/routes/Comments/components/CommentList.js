"use strict";

import React from "react";
import Comment from "./Comment";

class CommentList extends React.Component {

  render() {

    var commentNodes = this.props.data.map(function(comment) {

        return (
            <Comment author={comment.author} key={comment.id} text={comment.text}/>
        );
    });

    return (
       <div>
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;
