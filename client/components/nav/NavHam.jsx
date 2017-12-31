import React from 'react';
import { connect } from 'react-redux';

import FaMail from 'react-icons/lib/md/email';
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square';
import FaGithub from 'react-icons/lib/fa/github';
import { setHover } from '../../actions/Nav_Actions.jsx';
import './NavHam.scss';

class NavHam extends React.Component {

  handleClick = () => {
    this.props.setHoverDispatch(!this.props.isHovering);
  }

  render() {
    return (
      <div className="NavHam">
        <a
          className={this.props.isHovering ? 'hovering' : ''}
          onClick={this.handleClick}
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
            <a
              href="mailto:wBinselim@hawkmail.newpaltz.edu?subject=Nice%20Website!"
            >
              <FaMail />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isHovering: state.navBar.hovering,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHoverDispatch: (hover) => { dispatch(setHover(hover)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavHam);
