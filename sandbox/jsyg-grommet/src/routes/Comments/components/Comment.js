import React from "react"
import Tile from "grommet/components/Tile"
import Header from "grommet/components/Header"

class CommentBox extends React.Component {

    render() {
        return(
            <Tile wide={true} colorIndex="light-2" align="start">
              <Header>{this.props.author}</Header>
              {this.props.text}
            </Tile>
        );
    }
}

export default CommentBox;
