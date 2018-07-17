import React from 'react'
import { connect } from 'react-redux'

import FaMail from 'react-icons/lib/md/email'
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square'
import FaGithub from 'react-icons/lib/fa/github'

import './navham.scss'

class NavHam extends React.Component {
  handleClick = () => {
    this.props.setHover(true)
  }

  handleMouseEnter = () => {
    this.props.setHover(true)
  }

  render() {
    return (
      <div className="NavHam">
        <a
          className={this.props.isHovering ? 'hovering' : ''}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
        >
          <span />
        </a>
        <ul className="top-contacts">
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

const mapStateToProps = ({ isHovering }) => {
  return { isHovering }
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

export default connect(mapStateToProps, mapDispatchToProps)(NavHam)
