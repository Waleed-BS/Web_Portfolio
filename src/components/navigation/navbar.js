import React from 'react'
import { connect } from 'react-redux'
import NavLinks from './navlinks.js'

import './navbar.scss'

class NavBar extends React.Component {
  handleMouseEnter = () => {
    this.props.setHover(true)
  }

  handleMouseLeave = () => {
    this.props.setHover(false)
  }

  render() {
    return (
      <div
        className={`NavBar${this.props.hover ? ' hovering' : ''}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <NavLinks />
      </div>
    )
  }
}

const mapStateToProps = ({ hover }) => {
  return { hover }
}

const mapDispatchToProps = dispatch => {
  return {
    setHover: event =>
      dispatch({
        type: `SET_HOVER`,
        isHovering: event,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
