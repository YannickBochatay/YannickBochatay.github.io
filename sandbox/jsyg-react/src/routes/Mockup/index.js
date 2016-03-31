"use strict";

module.exports = {

  path: 'mockup',

  getComponent(location, cb) {

    require.ensure([], (require) => {
      cb(null, require('./components/Mockup'))
    })
  }
}
