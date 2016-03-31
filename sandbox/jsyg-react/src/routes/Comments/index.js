"use strict";

module.exports = {

  path: 'comments',

  getComponent(location, cb) {

    require.ensure([], (require) => {
      cb(null, require('./components/CommentBox'))
    })
  }
}
