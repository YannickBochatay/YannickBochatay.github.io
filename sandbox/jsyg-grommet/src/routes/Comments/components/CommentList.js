import React from "react"
import Comment from "./Comment"
import Tiles from "grommet/components/Tiles"

class CommentList extends React.Component {

  render() {

    var commentNodes = this.props.data.map(function(comment) {

        return (
          <Comment author={comment.author} key={comment.id} text={comment.text}/>
        )
    })

    return (
      <Tiles pad="large">
        {commentNodes}
      </Tiles>
    )
  }
}

export default CommentList
