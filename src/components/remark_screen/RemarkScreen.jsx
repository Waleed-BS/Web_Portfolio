import React from 'react'
import { Link } from 'gatsby'

import Obfuscate from 'react-obfuscate'
import { FaWrench, FaGraduationCap, FaCode } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

const ForHomePageContent = (
  <div className="remark-screen__message">
    <p>
      <b>I'm glad</b>
      <br /> that you're visiting my website.
    </p>
    <p>
      There's something I want you to remember while you're going over the
      website.
    </p>
    <p>
      At present, I'm open to <span>full time on-site job</span> offers anywhere in
      the US.
    </p>
    <p>
      If you realize that I would be a good fit, drop me a message at
      <br/>
      <b>
        <Obfuscate email="waleed-bs@live.com" />
      </b>.
    </p>
    <p>Thank you. Now, you're free to go further.</p>
  </div>
)

const ForContactPageContent = (
  <div className="remark-screen__message">
    <p>
      <b>Hi there</b>
      <br /> Before you leave
    </p>
    <p>
      I want you to remember that at present, I am open to{' '}
      <b>full time on-site job</b> offers anywhere in the US.
    </p>
    <p>
      If you feel that you want me on your team, drop me a message at{' '}
      <b>
        <Obfuscate email="waleed-bs@live.com" />
      </b>.
    </p>
    <p />
    <p>
      Thank you<br />
      <b>Waleed</b>
    </p>
  </div>
)

const RemarkScreen = props => {
  const links = [
    { path: 'toolbox', icon: FaWrench },
    { path: 'projects', icon: FaCode },
    { path: 'education', icon: FaGraduationCap },
    { path: 'experience', icon: MdWork },
  ]
  return (
    <div
      className={`remark-screen ${props.isActive &&
        'remark-screen--is-active'}`}
    >
      {props.locationPathName === '/'
        ? ForHomePageContent
        : ForContactPageContent}
      {props.locationPathName === '/' && (
        <div className="remark-screen__links">
          {links.map(link => (
            <Link
              key={link.path}
              className="remark-screen__link"
              to={`/${link.path}/`}
              onClick={() => props.onClick(link.path)}
              tabIndex={props.isActive ? '1' : '-1'}
            >
              <link.icon /> {link.path}
            </Link>
          ))}
        </div>
      )}

      <div className="remark-screen__bg" />
    </div>
  )
}

export default RemarkScreen
