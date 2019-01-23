import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/index'

class Experience extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
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
                Developed a game to recognize people’s reactive response to
                hearing words in a non-native language.
              </li>
              <li>
                Built a multiplayer server on a <span>Node.js</span> backend
                using WebSocket protocol to provide real-time communication
                between players and server.
              </li>
              <li>
                Implemented the client side of the game by taking advantage of{' '}
                <span>React</span> components along with <span>Redux</span> for
                managing the state of players and rooms.
              </li>
              <li>
                Players are able to play the game by creating or joining a room
                of two people after specifying their name and native country.
              </li>
              <li>
                This project assisted members of Department of Computer Science
                by utilizing it as a part of a research project.
              </li>
            </ul>
          </div>
          <div className="experience__quote-container">
            <p className="experience__quote-container__quote">
              "A very talented full-stack developer. Waleed led a project under
              my supervision to develop a multi-person game used in a research
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
                develop a website from scratch using the <span>LAMP stack</span>.
              </li>
              <li>
                Developed to automate the process of Social Return on Investment
                (SROI) and Economic Investment (EI) surveys.
              </li>
              <li>
                Designed to let the administrator to have full control over{' '}
                managing surveys while limiting the access of regular users.
              </li>
              <li>
                Helped The Benjamin Center and affiliated companies/businesses
                to speed up and enhance the process of SROI and EI surveys.{' '}
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Experience
