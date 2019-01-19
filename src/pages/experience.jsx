import React from 'react'
import Helmet from 'react-helmet'

class Experience extends React.Component {
  render() {
    return (
      <div id="WorkExperience" className="section experience">
        <Helmet title="My work experience" />
        <div className="experience__heading-container">
          <h2 className={'experience__heading-container__md-heading'}>
            Full Stack Web Developer Intern, SUNY New Paltz
          </h2>
        </div>
        <div className="experience__list-container">
          <ul>
            <li>
              Developed a <span>game</span> to recognize people’s reactive
              response to hearing words in a non-native language.
            </li>
            <li>
              Built a <span>multiplayer server</span> on a <u>Node.js</u>{' '}
              backend using WebSocket protocol to provide real-time
              communication between players and server.
            </li>
            <li>
              Implemented the client side of the game by utilizing <u>React</u> {' '}
              components along with <u>Redux</u> library for managing the UI
              state.
            </li>
            <li>
              Players are able to play the game by creating or joining a room of
              two people after specifying their name and native country.
            </li>
          </ul>
        </div>
        <div className="experience__quote-container">
          <p className="experience__quote-container__quote">
            "A very talented full-stack developer. Waleed led a project under my
            supervision to develop a multi-person game used in a research
            project. He showed himself to be a quick learner of new technology
            with an ability to quickly grasp the essentials components of a
            project. Highly recommended."
          </p>
          <p className="experience__quote-container__quote">
            - Chirakkal V. Easwaran, Professor & Chair, Department of Computer
            Science
          </p>
        </div>
        <div className="experience__heading-container">
          <h2 className={'experience__heading-container__md-heading'}>
            Full Stack Web Developer Intern, The Benjamin Center
          </h2>
        </div>
        <div className="experience__list-container">
          <ul>
            <li>
              Led a team of two while working with a local organization to
              develop a website from scratch using the <u>LAMP stack</u>.
            </li>
            <li>
              Developed to <span>automate</span> the process of Social Return
              on Investment (SROI) and Economic Investment (EI){' '}
              <span>surveys</span>.
            </li>
            <li>
              Designed to let the administrator to have full control over {' '}
              <span>managing surveys</span> while <span>limiting the access</span> of regular users.
            </li>
            <li>
              Helped The Benjamin Center and affiliated companies/businesses to {' '} 
              <span>speed up</span> and <span>enhance</span> the process of SROI
              and EI surveys.{' '}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Experience
