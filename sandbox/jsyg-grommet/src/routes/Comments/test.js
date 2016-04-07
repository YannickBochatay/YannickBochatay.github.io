"use strict";

import React from "react";
import "react-dom";
import TestUtils from "react-addons-test-utils";
import Comments from "./";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";

var Promise = require('es6-promise').Promise; //nécessaire pour PhantomJS

describe("Comments", () => {

  jasmine.Ajax.install();

  let component = TestUtils.renderIntoDocument(<Comments/>);

  let request = jasmine.Ajax.requests.mostRecent();

  request.respondWith({
    status: 200,
    responseText: '[{"author":"YB","text":"Bonjour"},{"author":"YB","text":"Bonjour à nouveau"}]'
  });

  it("fetchs data", function() {

    expect(component.state.data.length).toEqual(2);

    expect(component.state.data[0].author).toEqual("YB");

  });

  it("has 1 commentList component", function() {

    let commentList = TestUtils.findRenderedComponentWithType(component,CommentList);

    expect(commentList).toBeTruthy();

  });

  it("has 1 commentForm component", function() {

    let commentForm = TestUtils.findRenderedComponentWithType(component,CommentForm);

    expect(commentForm).toBeTruthy();

  });

});
