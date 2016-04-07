import React from 'react'
import { FormattedMessage } from "react-intl"

class NotFound extends React.Component {

  render() {

    return (
      <h1><FormattedMessage id="Page not found"/></h1>
    );
  }
}

export default NotFound;
