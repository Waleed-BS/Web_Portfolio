
/*
    ./client/components/nav/NavLinks.jsx
*/
import './NavLinks.scss';
import React from 'react';
import { connect } from 'react-redux';

/* top-links icons */
import MdHome from 'react-icons/lib/md/home.js';
import FaInfoCircle from 'react-icons/lib/fa/info-circle'
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';
import MdWork from 'react-icons/lib/md/work';
import FaCode from 'react-icons/lib/fa/code';
import Logo from '../../assets/images/logo.png';
/* bottom-links icons */
import FaMail from 'react-icons/lib/fa/envelope';
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square';
import FaGithub from 'react-icons/lib/fa/github';

/* imported actions: */
import { setHover, setActive } from '../../actions/Nav_Actions.jsx';
import About from '../sections/About.jsx';

class NavLinks extends React.Component {

  handleHoverTrue = (value) => {
    this.props.setHoverDispatch(value);
  };

  handleSetActive = (to) => {
    console.log("to: ",to)
    this.props.setActiveDispatch(to);
    this.handleHoverTrue(true);
  }

  render() {
    return (

      <div className="NavLinks">

        <ul>
          <img src={Logo} />
          <li
            className={this.props.active === 'About' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <a href="#About" onClick={() => { this.handleSetActive("About"); this.handleHoverTrue(false);}}>
              <FaInfoCircle />
                <span>About Me </span>
            </a>
          </li>

          <li
            className={this.props.active === 'Skills' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <a href="#Skills" onClick={() => { this.handleSetActive("Skills"); this.handleHoverTrue(false);}}>
              <FaCode />
              <span>Skills</span>
            </a>
          </li>

          <li
            className={this.props.active === 'Projects' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <a href="#Projects" onClick={() => { this.handleSetActive("Projects"); this.handleHoverTrue(false);}}>
              <MdWork />
              <span>Projects</span>
            </a>
          </li>

          <li
            className={this.props.active === 'Education' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <a href="#Education" onClick={() => { this.handleSetActive("Education"); this.handleHoverTrue(false);}}>
              <FaGraduationCap />
              <span>Education</span>
            </a>
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
    isHovering: state.navBar.hovering,
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
