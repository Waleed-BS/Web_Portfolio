
/*
    ./client/components/nav/NavLinks.jsx
*/
import './NavLinks.scss';
import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Link, Events, scrollSpy } from 'react-scroll';

/* top-links icons */
import MdHome from 'react-icons/lib/md/home.js';
import FaInfoCircle from 'react-icons/lib/fa/info-circle'
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';
import MdWork from 'react-icons/lib/md/work';
import FaCode from 'react-icons/lib/fa/code';
/* bottom-links icons */
import FaMail from 'react-icons/lib/fa/envelope';
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square';
import FaGithub from 'react-icons/lib/fa/github';

/* imported actions: */
import { setHover, setActive } from '../../actions/Nav_Actions.jsx'

class NavLinks extends React.Component {

  componentDidMount() {
    Events.scrollEvent.register('end', () => {
      this.props.setHoverDispatch(false);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('end');
  }

  handleHoverTrue = () => {
    this.props.setHoverDispatch(true);
  };

  handleSetActive = (to) => {
    this.props.setActiveDispatch(to);
  }

  render() {

    return (

      <div className="NavLinks">
        <ul>
          <li
            className={this.props.active === 'Home' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <Link
              to="Home"

              onSetActive={this.handleSetActive}
            >
              <MdHome />
              <span>Top of Page</span>
            </Link>
          </li>

          <li
            className={this.props.active === 'About' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <Link
              to="About"

              onSetActive={this.handleSetActive}
            >
              <FaInfoCircle />
              <span>About Me</span>
            </Link>
          </li>

          <li
            className={this.props.active === 'Skills' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <Link
              to="Skills"

              onSetActive={this.handleSetActive}
            >
              <FaCode />
              <span>Skills</span>
            </Link>
          </li>

          <li
            className={this.props.active === 'Portfolio' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <Link
              to="Portfolio"

              onSetActive={this.handleSetActive}
            >
              <MdWork />
              <span>Portfolio</span>
            </Link>
          </li>

          <li
            className={this.props.active === 'Education' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <Link
              to="Education"

              onSetActive={this.handleSetActive}
            >
              <FaGraduationCap />
              <span>Education</span>
            </Link>
          </li>
        </ul>
        <ul className="side-contacts">
          <li
            onMouseEnter={this.handleHoverTrue}
          >
            <a
              href="mailto:wBinselim@hawkmail.newpaltz.edu?subject=Nice%20Website!"
            >
              <FaMail />
              <span>Email</span>
            </a>
          </li>

          <li
            onMouseEnter={this.handleHoverTrue}
          >
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://linkedin.com/in/waleed-bs"
            >
              <FaLinkedIn />
              <span>LinkedIn</span>
            </a>
          </li>

          <li
            onMouseEnter={this.handleHoverTrue}
          >
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/waleed-bs"
            >
              <FaGithub />
              <span>Github</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    active: state.navBar.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHoverDispatch: (hover) => {
      dispatch(setHover(hover));
    },
    setActiveDispatch: (section) => {
      dispatch(setActive(section));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
