"use strict";

import React from "react";
import "react-dom";
import TestUtils from "react-addons-test-utils";
import CommentForm from "./CommentForm";
import TextField from 'material-ui/lib/text-field'

describe("CommentForm", () => {

  let component = TestUtils.renderIntoDocument(<CommentForm/>);

  let fields = TestUtils.scryRenderedComponentsWithType(component,TextField);

  it("has 2 fields", function() {

    expect(fields.length).toEqual(2);
  });

});
