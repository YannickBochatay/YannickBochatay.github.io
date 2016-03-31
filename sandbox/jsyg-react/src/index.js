"use strict";

import React from 'react';
import ReactDOM from "react-dom";
import { Router, hashHistory } from 'react-router';

import App from "./components/App";
import Comments from "./routes/Comments/";
import Mockup from "./routes/Mockup";
import NotFound from "./components/NotFound";

let NotFoundView = {
  path:"*",
  component:NotFound
}

const rootRoute = {

  component:"div",

  childRoutes:[{

    path:"/",

    component:App,

    childRoutes:[ Comments, Mockup, NotFoundView ]

  }]

};

ReactDOM.render(
  <Router history={hashHistory} routes={rootRoute} />,
  document.getElementById("content")
);
