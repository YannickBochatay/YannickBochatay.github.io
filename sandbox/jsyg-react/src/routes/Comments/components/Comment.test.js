"use strict";


import React from "react";
import Comment from './Comment';
import CardText from 'material-ui/lib/card/card-text';
import TestUtils from "react-addons-test-utils";

describe("Comment", () => {

  let tree = TestUtils.renderIntoDocument(<Comment author="YB" text="Salut"/>);

/*
  it("has an author property", function() {

    let result = TestUtils.findRenderedComponentWithType(tree,Card);

    TestUtils.scryRenderedComponentsWithType(result,CardTitle);


    expect(result).toBeTruthy();

  });*/

  it("has a text content", function() {

    let elmt = TestUtils.findRenderedComponentWithType(tree,CardText);

    expect(elmt).toBeTruthy();

  });

});
