import React from 'react'
import Helmet from 'react-helmet'

import TechIcon from '../components/icons/TechIcon'
import flashcards_mp4 from '../assets/videos/Flashcards.mp4'
import data_displayer_mp4 from '../assets/videos/Data_Displayer.mp4'
import Readable_mp4 from '../assets/videos/Readable.mp4'
import MyReads_mp4 from '../assets/videos/MyReads.mp4'
import surveymanagement_mp4 from '../assets/videos/SurveyManagementSystem.mp4'
import wordfamiliesonline_mp4 from '../assets/videos/WordFamiliesOnline.mp4'
import reactnative_icon from '../assets/images/icons/reactnative.png'
import android_icon from '../assets/images/icons/android.svg'
import nodejs_icon from '../assets/images/icons/nodejs-icon.png'
import redux_icon from '../assets/images/icons/redux.svg'
import flask_icon from '../assets/images/icons/flask.png'
import python_icon from '../assets/images/icons/python-5.svg'
import javascript_icon from '../assets/images/icons/javascript.svg'
import jinja2_icon from '../assets/images/icons/jinja-small.png'
import bootstrap_icon from '../assets/images/icons/bootstrap.svg'
import sqlite_icon from '../assets/images/icons/Sqlite.png'
import php_icon from '../assets/images/icons/php.png'
import mysql_icon from '../assets/images/icons/mysql.svg'
import linux_icon from '../assets/images/icons/linux.png'
import apache2_icon from '../assets/images/icons/apache2.png'
import react_icon from '../assets/images/icons/reactjs.svg'
import express_icon from '../assets/images/icons/expressjs.png'
import iOS_icon from '../assets/images/icons/iOS.svg'
import expo_icon from '../assets/images/icons/expo.svg'
import heroku_icon from '../assets/images/icons/heroku.svg'
import webpack_icon from '../assets/images/icons/webpack.svg'
import socketio_icon from '../assets/images/icons/socket-io.svg'
import babel_icon from '../assets/images/icons/babel.svg'
import sass_icon from '../assets/images/icons/sass.svg'

const Projects = () => (
  <div id="Projects" className={'projects'}>
    <Helmet title="My projects" />
    <h2 className={'projects__md-heading headline-focus-animation'}>
      These are my <span className="projects__md-heading__span">projects</span>
    </h2>
    <div className="projects">
      <div className="inner-container">
        <div className="img-container">
          {/* <img
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
          }}
          src={surveymanagement_pic}
          alt="survey_management_system.pic"
        /> */}
          <video controls>
            <source src={wordfamiliesonline_mp4} type="video/mp4" />
          </video>
        </div>
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">Word Familes Online</h3>
          </div>
          <div className="subtitle-container">
            <div className="icons-container">
              <TechIcon title="React" source={react_icon} />
              <TechIcon title="Redux" source={redux_icon} />
              <TechIcon title="Webpack" source={webpack_icon} />
              <TechIcon title="Babel" source={babel_icon} />
              <TechIcon title="Socket.io" source={socketio_icon} />
              <TechIcon title="JavaScript (ES5/ES6)" source={javascript_icon} />
              <TechIcon title="Express" source={express_icon} />
              <TechIcon title="Sass" source={sass_icon} />
            </div>
            <div className="links-container">
              <span className="link inactive">LIVE</span>
              <a
                className="link"
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/Waleed-BS/Word_Families_Online"
              >
                <span>SOURCE</span>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <p>
            Word Families Online is a game to recognize people’s reactive
            response to hearing English words in a non-native language. Players
            are able to play Word Families Online by creating or joining a room
            of two people after specifying their name and native country.
          </p>
        </div>
      </div>
      <div className="inner-container">
        <div className="img-container">
          {/* <img
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
          }}
          src={surveymanagement_pic}
          alt="survey_management_system.pic"
        /> */}
          <video controls>
            <source src={surveymanagement_mp4} type="video/mp4" />
          </video>
        </div>
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">Survey Management System</h3>
          </div>
          <div className="subtitle-container">
            <div className="icons-container">
              <TechIcon title="Linux Environment" source={linux_icon} />
              <TechIcon title="Apache2 HTTPS Server" source={apache2_icon} />
              <TechIcon title="MySQL" source={mysql_icon} />
              <TechIcon title="PHP" source={php_icon} />
              <TechIcon title="Bootstrap" source={bootstrap_icon} />
              <TechIcon title="JavaScript" source={javascript_icon} />
            </div>
            <div className="links-container">
              <a
                className="link"
                target="_blank"
                rel="noreferrer noopener"
                href="https://cs.newpaltz.edu/p/f17-01/Benjamin-Center/eisurvey.php?program_id=SNUGS"
              >
                <span>LIVE</span>
              </a>
              <span className="link inactive">SOURCE</span>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <p>
            This website automates the process of Social Return on Investment
            (SROI) and Economic Investment (EI) surveys. It allows administrator
            to have full control over managing surveys while limiting the access
            of regular users.
          </p>
        </div>
      </div>
      <div className="inner-container">
        <div className="img-container">
          {/* <img src={flashcards_gif} alt="Demo of Flashcards" /> */}
          <video controls>
            <source src={flashcards_mp4} type="video/mp4" />
          </video>
        </div>
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">Mobile Flashcards</h3>
          </div>
          <div className="subtitle-container">
            <div className="icons-container">
              <TechIcon title="React Native" source={reactnative_icon} />
              <TechIcon title="Redux" source={redux_icon} />
              <TechIcon title="Expo" source={expo_icon} />
              <TechIcon title="Node.js" source={nodejs_icon} />
              <TechIcon title="iOS" source={iOS_icon} />
              <TechIcon title="Android" source={android_icon} />
            </div>
            <div className="links-container">
              <span className="link inactive">LIVE</span>
              <a
                className="link"
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/Waleed-BS/Flashcards"
              >
                <span>SOURCE</span>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <p>
            This Mobile App allows users to study a collection of flashcards.
            Users can create decks of unlimited flashcards to quiz themselves
            and receive score. Users can also get notifications to remind them
            to study.
          </p>
        </div>
      </div>

      <div className="inner-container">
        <div className="img-container">
          {/* <img src={Readable_gif} alt="Readable.gif" /> */}
          <video controls>
            <source src={Readable_mp4} />
          </video>
        </div>
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">Readable</h3>
          </div>
          <div className="subtitle-container">
            <div className="icons-container">
              <TechIcon title="React" source={react_icon} />
              <TechIcon title="Redux" source={redux_icon} />
              <TechIcon title="Node.js" source={nodejs_icon} />
              <TechIcon title="Bootstrap" source={bootstrap_icon} />
              <TechIcon title="JavaScript (ES5/ES6)" source={javascript_icon} />
              <TechIcon title="Express.js" source={express_icon} />
            </div>
            <div className="links-container">
              <span className="link inactive">LIVE</span>
              <a
                className="link"
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/Waleed-BS/Readable"
              >
                <span>SOURCE</span>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <p>
            I developed a responsive Single-Page App where users can create
            posts under a chosen category, comment on posts, edit/delete or vote
            on posts or comments, and sort posts or comments by time or votes.
          </p>
        </div>
      </div>

      <div className="inner-container">
        <div className="img-container">
          {/* <img src={MyReads_gif} alt="MyReads.gif" /> */}
          <video controls>
            <source src={MyReads_mp4} type="video/mp4" />
          </video>
        </div>
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">My Reads</h3>
          </div>
          <div className="subtitle-container">
            <div className="icons-container">
              <TechIcon title="React" source={react_icon} />
              <TechIcon title="Node.js" source={nodejs_icon} />
              <TechIcon title="JavaScript (ES5/ES6)" source={javascript_icon} />
              <TechIcon title="Heroku" source={heroku_icon} />
            </div>
            <div className="links-container">
              <a
                className="link"
                target="_blank"
                rel="noreferrer noopener"
                href="https://my--reads.herokuapp.com/"
              >
                <span>LIVE</span>
              </a>
              <a
                className="link"
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/Waleed-BS/MyReads"
              >
                <span>SOURCE</span>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <p>
            I made a simple bookshelf web app where users can categorize their
            books. Users can search for books by title or author from an
            express.js back-end server, then categorize them by “read,”
            “currently reading,” or “want to read”.
          </p>
        </div>
      </div>

      <div className="inner-container">
        <div className="img-container">
          {/* <img src={data_displayer_gif} alt="data_displayer.gif" /> */}
          <video controls>
            <source src={data_displayer_mp4} type="video/mp4" />
          </video>
        </div>
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">Climate Tracker</h3>
          </div>
          <div className="subtitle-container">
            <div className="icons-container">
              <TechIcon title="Flask" source={flask_icon} />
              <TechIcon title="Python" source={python_icon} />
              <TechIcon title="Jinja2" source={jinja2_icon} />
              <TechIcon title="Bootstrap" source={bootstrap_icon} />
              <TechIcon title="SQLite3" source={sqlite_icon} />
            </div>
            <div className="links-container">
              <span className="link inactive">LIVE</span>
              <a
                className="link"
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/Waleed-BS/Temperature_Humidity_Tracker"
              >
                <span>SOURCE</span>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <p>
            Log temperature/humidity data by DHT22 sensor connected to the
            Raspberry Pi for a period of time. Then log in to the website to
            display, log, or graph the data.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Projects
