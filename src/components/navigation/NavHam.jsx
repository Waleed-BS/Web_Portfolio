import React from 'react'
import { connect } from 'react-redux'

import { MdMail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

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
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="mailto:waleed-bs@live.com">
              <MdMail />
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
