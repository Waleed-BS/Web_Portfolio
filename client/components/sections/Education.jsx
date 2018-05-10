import React from 'react';
import { connect } from 'react-redux';
import { setEducationActive } from '../../actions/Education_Actions.jsx';
import chevron from '../../assets/icons/chevron-down.svg';
import udacity_mark from '../../assets/icons/udacity_mark.png';
import sunynewpaltz_logo from '../../assets/icons/newpaltz.png';

import './Education.scss';

class Education extends React.Component {

  handleClick = (event) => {
    const section = event.target.className.split(' ')[0];
    const active = this.props.educationIsActive[section];
    this.props.setEducationActive(section, !active);
  }

  render() {
    return (
      <div
        id="Education"
        className="section"
      >
        <h2 className="section-title">Education</h2>
        <div className="inner-container">
          <div className="title-container">
            <h3
              className="Udacity subsection-title"
              onClick={this.handleClick}
            >React Nanodegree
            </h3>
            <img
              className={`Udacity chevron${this.props.UdacityIsActive ? ' expanded' : ''}`}
              alt="expand"
              src={chevron}
              onClick={this.handleClick}
            />
          </div>
          <div
            className={`content${this.props.UdacityIsActive ? ' expanded' : ''}`}
          >
            <div
              className={`left-side${this.props.UdacityIsActive ? ' expanded' : ''}`}
            >
              <img className="school" alt="codecore" src={udacity_mark} />
              <p>Udacity</p>
              <p>Online Course</p>
              <p>2017</p>
            </div>
            <div
              className={`right-side${this.props.UdacityIsActive ? ' expanded' : ''}`}
            >
              <p>Relevant Coursework: </p>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>React Native</li>
                <li>ES6 JavaScript</li>
                <li>Node.js</li>
                <li>Expo</li>
                <li>Git/GitHub</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="inner-container">
          <div className="title-container">
            <h3
              className="SUNYNewPaltz subsection-title"
              onClick={this.handleClick}
            >B.S. in Computer Science
            </h3>
            <img
              className={`SUNYNewPaltz chevron${this.props.SUNYNewPaltzIsActive ? ' expanded' : ''}`}
              alt="expand"
              src={chevron}
              onClick={this.handleClick}
            />
          </div>
          <div
            className={`content${this.props.SUNYNewPaltzIsActive ? ' expanded' : ''}`}
          >
            <div
              className={`left-side${this.props.SUNYNewPaltzIsActive ? ' expanded' : ''}`}
            >
              <img className="school" alt="" src={sunynewpaltz_logo} />
              <p>SUNY New Paltz</p>
              <p>New Paltz, NY</p>
              <p>2017</p>
            </div>
            <div
              className={`right-side${this.props.SUNYNewPaltzIsActive ? ' expanded' : ''}`}
            >
              <p>Relevant Coursework: </p>
              <ul>
                <li>Computer Science I: Foundations</li>
                <li>Computer Science II: Data Structures</li>
                <li>Computer Science III: Advanced Data Structures</li>
                <li>Object Oriented Programming</li>
                <li>Software Engineering</li>
                <li>Embedded Linux</li>
                <li>Discrete Mathematics for Computing</li>
                <li>Discrete and Continuous Computer Algorithms</li>
                <li>Assembly Language and Computer Architecture</li>
                <li>Language Processing</li>
                <li>Operating System Architecture</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    educationIsActive: state.educationActive,
    SUNYNewPaltzIsActive: state.educationActive.SUNYNewPaltz,
    UdacityIsActive: state.educationActive.Udacity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEducationActive: (section, active) => {
      dispatch(setEducationActive(section, active));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Education);
