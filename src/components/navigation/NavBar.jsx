import React from 'react'
import { connect } from 'react-redux'
import NavLinks from './NavLinks'

class NavBar extends React.Component {
  handleMouseEnter = () => {
    this.props.setHover(true)
  }

  handleMouseLeave = () => {
    this.props.setHover(false)
  }

  render() {
    return (
      <nav
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={`navbar ${
          this.props.isHovered ? 'navbar--hovered' : 'navbar--not-hovered'
        }`}
      >
        <NavLinks />
      </nav>
    )
  }
}

const mapStateToProps = ({ isHovered }) => {
  return { isHovered }
}

const mapDispatchToProps = dispatch => {
  return {
    setHover: event =>
      dispatch({
        type: `SET_HOVER`,
        isHovered: event,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
