"use strict";

import React from "react";
import Card from 'material-ui/lib/card/card';
//import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import CardHeader from 'material-ui/lib/card/card-header';

class CommentBox extends React.Component {

    render() {
        return(
            <Card zDepth={2} style={ {marginTop:20} }>
                <CardHeader title={this.props.author}></CardHeader>
                <CardText>
                  <pre>{this.props.text}</pre>
                </CardText>
            </Card>
        );
    }
}

export default CommentBox;
