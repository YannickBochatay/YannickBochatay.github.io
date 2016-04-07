import React from 'react'
import Layer from 'grommet/components/Layer'
import Menu from 'grommet/components/Menu'
import Header from "grommet/components/Header"
import Title from "grommet/components/Title"
import Anchor from "grommet/components/Anchor"
import IconMenu from "grommet/components/icons/base/Menu"
import Link from './Link'
import { FormattedMessage } from "react-intl"


export default class GlobalNav extends React.Component {

  constructor(props) {

    super(props)

    this.state = { hidden : true }
  }

  toggleSideBar() {

    this.setState({ hidden : !this.state.hidden })
  }

  render() {

    var toggle =  this.toggleSideBar.bind(this)

    return (
      <Header pad="medium">

        <Anchor href="" icon={<IconMenu />} onClick={toggle} />

        <Title>
          <FormattedMessage id="My App"/>
        </Title>

        <Layer onClose={toggle} closer={true} align="left" hidden={this.state.hidden}>
          <Menu pad={ { vertical:"large" } }>
            <Link to="/" onClick={toggle}>
              <FormattedMessage id="Home"/>
            </Link>
            <Link to="/comments" onClick={toggle}>
              <FormattedMessage id="Comments"/>
            </Link>
          </Menu>
        </Layer>

      </Header>
    )
  }
}
