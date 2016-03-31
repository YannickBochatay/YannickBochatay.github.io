import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import AppBar from 'material-ui/lib/app-bar'
import MenuItem from 'material-ui/lib/menus/menu-item'
import IconButton from 'material-ui/lib/icon-button'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/lib/menus/icon-menu'

//import logo from "./logo.png"


class GlobalNav extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      menuOpen : false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {

    this.setState({ menuOpen: !this.state.menuOpen })
  }

  closeMenu() {

    this.setState({ menuOpen: false })
  }

  createGoToFct(path) {

    var that = this;

    return () => {
      that.closeMenu()
      that.context.router.push(path)
    }
  }

  signOut() {
    window.alert("Bye bye")
  }

  render() {

    let goHome = this.createGoToFct('/')

    return (

      <AppBar
        title="My App"
        onLeftIconButtonTouchTap={this.toggleMenu}
        //onTitleTouchTap={ goHome }
        //titleStyle={ {cursor:"pointer"} }

        iconElementRight={
          <IconMenu
            iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Sign out" onClick={this.signOut} />
          </IconMenu>
        }
      >
      <LeftNav
        open={this.state.menuOpen}
        docked={false}
        onRequestChange={menuOpen => this.setState({menuOpen})}
      >
        <MenuItem onClick={ goHome }>Home</MenuItem>
        <MenuItem onClick={ this.createGoToFct('/comments') }>Comments</MenuItem>
        <MenuItem onClick={ this.createGoToFct('/mockup') }>Mock-up</MenuItem>
      </LeftNav>
      </AppBar>

    )
  }
}

GlobalNav.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default GlobalNav
