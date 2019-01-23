import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'

import {
  FaWrench,
  FaGraduationCap,
  FaCode,
  FaLinkedin,
  FaGithub,
  FaInfoCircle
} from 'react-icons/fa'
import { MdWork, MdMail } from 'react-icons/md'

import logo from '../../assets/images/logo.png'

class NavLinks extends React.Component {
  // set active to the clicked section
  handleSetActive = section => {
    // dispatch an action to the reducer of which section is active
    this.props.setActive(section)
  }

  handleHover = () => {
    this.props.setHover(!this.props.isHovered)
  }

  render() {
    return (
      <div
        className={'navlinks navlinks--flex-container navlinks--flex-column'}
      >
        <ul className={'navlinks__list'}>
          <li
            className={
              'navlinks__list__item--flex-container' +
              ' navlinks__list__item--flex-column' +
              ' navlinks__list__item--flex-center'
            }
          >
            <Link
              className={'navlinks__list__item__link'}
              to="/"
              onClick={() => {
                this.handleSetActive('about')
                this.handleHover()
              }}
            >
              <img alt="logo" className={'logo logo--size'} src={logo} />
            </Link>
          </li>
          <li
            className={
              this.props.active === 'about'
                ? 'navlinks__list__item navlinks__list__item--active'
                : 'navlinks__list__item'
            }
          >
            <Link
              className={'navlinks__list__item__link'}
              to="/"
              onClick={() => {
                this.handleSetActive('about')
                this.handleHover()
              }}
            >
              <FaInfoCircle />
              <span
                className={
                  'navlinks__list__item__link__section-name' +
                  ' navlinks__list__item__link__section-name--bold'
                }
              >
                About
              </span>
            </Link>
          </li>

          <li
            className={
              this.props.active === 'toolbox'
                ? 'navlinks__list__item navlinks__list__item--active'
                : 'navlinks__list__item'
            }
          >
            <Link
              className={'navlinks__list__item__link'}
              to="/toolbox/"
              onClick={() => {
                this.handleSetActive('toolbox')
                this.handleHover()
              }}
            >
              <FaWrench />
              <span
                className={
                  'navlinks__list__item__link__section-name' +
                  ' navlinks__list__item__link__section-name--bold'
                }
              >
                Toolbox
              </span>
            </Link>
            {/* </a> */}
          </li>

          <li
            className={
              this.props.active === 'projects'
                ? 'navlinks__list__item navlinks__list__item--active'
                : 'navlinks__list__item'
            }
          >
            <Link
              className={'navlinks__list__item__link'}
              to="/projects/"
              onClick={() => {
                this.handleSetActive('projects')
                this.handleHover()
              }}
            >
              <FaCode />
              <span
                className={
                  'navlinks__list__item__link__section-name' +
                  ' navlinks__list__item__link__section-name--bold'
                }
              >
                Projects
              </span>
            </Link>
          </li>

          <li
            className={
              this.props.active === 'education'
                ? 'navlinks__list__item navlinks__list__item--active'
                : 'navlinks__list__item'
            }
          >
            <Link
              className={'navlinks__list__item__link'}
              to="/education/"
              onClick={() => {
                this.handleSetActive('education')
                this.handleHover()
              }}
            >
              <FaGraduationCap />
              <span
                className={
                  'navlinks__list__item__link__section-name' +
                  ' navlinks__list__item__link__section-name--bold'
                }
              >
                Education
              </span>
            </Link>
          </li>
          <li
            className={
              this.props.active === 'experience'
                ? 'navlinks__list__item navlinks__list__item--active'
                : 'navlinks__list__item'
            }
          >
            <Link
              className={'navlinks__list__item__link'}
              to="/experience/"
              onClick={() => {
                this.handleSetActive('experience')
                this.handleHover()
              }}
            >
              <MdWork />
              <span
                className={
                  'navlinks__list__item__link__section-name' +
                  ' navlinks__list__item__link__section-name--bold'
                }
              >
                Experience
              </span>
            </Link>
          </li>
        </ul>
        <ul className={'navlinks__list bottom-links-list'}>
          <li className={'navlinks__list__item'}>
            <a
              alt="email me"
              className={'navlinks__list__item__link'}
              href="mailto:waleed-bs@live.com"
            >
              <MdMail />
              <span
                className={
                  'navlinks__list__item__link__section-name' +
                  ' navlinks__list__item__link__section-name--bold'
                }
              >
                Email
              </span>
            </a>
          </li>

          <li className={'navlinks__list__item'}>
            <a
              className={'navlinks__list__item__link'}
              target="_blank"
              rel="noreferrer noopener"
              href="https://linkedin.com/in/waleed-bs"
            >
              <FaLinkedin />
              <span
                className={
                  'navlinks__list__item__link__section-name' +
                  ' navlinks__list__item__link__section-name--bold'
                }
              >
                Linkedin
              </span>
            </a>
          </li>

          <li className={'navlinks__list__item'}>
            <a
              className={'navlinks__list__item__link'}
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/waleed-bs"
            >
              <FaGithub />
              <span
                className={
                  'navlinks__list__item__link__section-name' +
                  ' navlinks__list__item__link__section-name--bold'
                }
              >
                Github
              </span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ active, isHovered }) => {
  return { active, isHovered }
}

const mapDispatchToProps = dispatch => {
  return {
    setActive: event =>
      dispatch({
        type: 'SET_ACTIVE',
        active: event,
      }),
    setHover: event =>
      dispatch({
        type: 'SET_HOVER',
        isHovered: event,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks)
