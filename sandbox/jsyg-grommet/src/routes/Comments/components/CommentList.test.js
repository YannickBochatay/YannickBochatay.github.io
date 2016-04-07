"use strict";

import React from "react";
import "react-dom";
import TestUtils from "react-addons-test-utils";
import CommentList from "./CommentList";
import Comment from "./Comment";

describe("CommentList", () => {

  let data = [{
    author:"YB",
    text:"Salut",
    id:1
  },{
    author:"YB",
    text:"Salut à nouveau",
    id:2
  }];

  let component = TestUtils.renderIntoDocument(<CommentList data={data}/>);

  it("has 2 comments", function() {

    let comments = TestUtils.scryRenderedComponentsWithType(component,Comment);

    expect(comments.length).toEqual(2);

  });


});
