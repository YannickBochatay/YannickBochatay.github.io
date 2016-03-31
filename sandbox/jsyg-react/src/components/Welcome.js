import React from 'react'
import RaisedButton from "material-ui/lib/raised-button"
import FontIcon from 'material-ui/lib/font-icon'
import { Link } from 'react-router';

class Welcome extends React.Component {

  render() {

    return (
      <div>
        <h2>Welcome</h2>
        <p>
          This is a very simple template built with <a href="http://www.material-ui.com/">material-ui</a>.
        </p>
        <p>
          The comments section is from the <a href="https://facebook.github.io/react/docs/tutorial.html">react tutorial</a>.
        </p>
        <Link to="/comments/">
          <RaisedButton
            label="See comments"
            secondary={true}
            icon={<FontIcon className="muidocs-icon-custom-github"/>}
          />
        </Link>
      </div>
    );
  }
}

export default Welcome;
