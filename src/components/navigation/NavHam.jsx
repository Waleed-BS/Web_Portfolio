import React from 'react'
import { connect } from 'react-redux'

import FaMail from 'react-icons/lib/md/email'
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square'
import FaGithub from 'react-icons/lib/fa/github'

class NavHam extends React.Component {
  handleClick = () => {
    this.props.setHover(!this.props.isHovered)
  }

  handleMouseLeave = () => {
    this.props.setHover(false)
  }

  render() {
    // console.log(this.props.isHovered);
    
    return (
      <div className={`navham navham--flex-container`}>
        {/* hamburger menu */}
        <a
          className={`navham__anchor ${
            this.props.isHovered ? 'navham__anchor--is-clicked' : ''
          }`}
          onClick={this.handleClick}
          onMouseLeave={this.handleMouseLeave}
          href="/"
        >
          <span />
        </a>
        {/* contact links */}
        <ul className="navham__list">
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/waleed-bs"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://linkedin.com/in/waleed-bs"
            >
              <FaLinkedIn />
            </a>
          </li>
          <li>
            <a href="mailto:waleed-bs@live.com">
              <FaMail />
            </a>
          </li>
        </ul>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavHam)
