import React from 'react'
import Article from 'grommet/components/Article'
import Header from 'grommet/components/Header'
import Section from 'grommet/components/Section'
import Link from './Link'
import { FormattedMessage } from "react-intl"

class Welcome extends React.Component {

  render() {

    return (
      <Article pad="medium">
        <Header>
          <h1><FormattedMessage id="Welcome"/></h1>
        </Header>
        <Section>
          <p>

            <FormattedMessage id="This is a very simple template built with"/>&nbsp;
            <a href="http://www.grommet.io">grommet</a>.
            <br/>

            <FormattedMessage id="The comments section is from the"/>&nbsp;
            <a href="https://facebook.github.io/react/docs/tutorial.html">
              <FormattedMessage id="React tutorial"/>
            </a>.
            <br/>

            <Link to="/comments/">
              <FormattedMessage id="See comments"/>
            </Link>

          </p>
        </Section>
      </Article>
    );
  }
}

export default Welcome;
