import React from 'react'
import { connect } from 'react-redux'
import NavLinks from './NavLinks'

class NavBar extends React.Component {

  componentDidMount() {
    // fixes ios onMouseLeave problem
    window.addEventListener('touchend', () => this.props.setHover(false))
  }

  render() {
    return (
      <nav
        className={`navbar ${this.props.isHovered ? 'navbar--hovered' : ''}`}
        onMouseEnter={() => this.props.setHover(true)}
        onMouseLeave={() => this.props.setHover(false)}
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
