
import React from 'react';
import TechIcon from './TechIcon.jsx';

import flashcards_gif from '../../assets/gifs/Flashcards.gif';
import data_displayer_gif from '../../assets/gifs/Data_Displayer.gif';
import Readable_gif from '../../assets/gifs/Readable.gif';
import MyReads_gif from '../../assets/gifs/MyReads.gif';
import surveymanagement_pic from '../../assets/images/surveymanagement.png';
import reactnative_icon from '../../assets/icons/reactnative.png';
import android_icon from '../../assets/icons/android.svg';
import nodejs_icon from '../../assets/icons/nodejs-icon.png';
import redux_icon from '../../assets/icons/redux.svg';
import flask_icon from '../../assets/icons/flask.png';
import python_icon from '../../assets/icons/python-5.svg';
import javascript_icon from '../../assets/icons/javascript.svg';
import jinja2_icon from '../../assets/icons/jinja-small.png';
import bootstrap_icon from '../../assets/icons/bootstrap.svg';
import sqlite_icon from '../../assets/icons/Sqlite.png';
import php_icon from '../../assets/icons/php.png';
import mysql_icon from '../../assets/icons/mysql.svg';
import linux_icon from '../../assets/icons/linux.png';
import redhat_icon from '../../assets/icons/redhat.png';
import apache2_icon from '../../assets/icons/apache2.png';
import react_icon from '../../assets/icons/reactjs.svg';
import express_icon from '../../assets/icons/expressjs.png';
import iOS_icon from '../../assets/icons/iOS.svg';
import expo_icon from '../../assets/icons/expo.svg';
import heroku_icon from '../../assets/icons/heroku.svg';

import './Projects.scss';

const Projects = () => (
  <div id="Projects" className="section">
  <h1 className="section-title">Projects</h1>
  <div className="inner-container">
    <div className="img-container">
      <img style={{backgroundImage: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%"}} src={surveymanagement_pic} alt="survey_management_system.pic" />
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
          <TechIcon title="Vanilla JS" source={javascript_icon}/>
        </div>
        <div className="links-container">
          <a className="link" target="_blank" rel="noreferrer noopener" href="https://cs.newpaltz.edu/~n02575037/BenjaminCenter/program.php?program_id=66">
            <span>LIVE</span>
          </a>
          <span className="link inactive">SOURCE</span>
        </div>
      </div>
    </div>
    <div className="bottom-container">
      <p>
        This website automates the process of Social Return on Investment (SROI)
        and Economic Investment (EI) surveys. It allows administrator to have
        full control over managing surveys while limiting the access of regular users.
      </p>
    </div>
  </div>
  <div className="inner-container">
    <div className="img-container">
      <img src={flashcards_gif} alt="Demo of Flashcards"/>
    </div>
    <div className="middle-container">
      <div className="title-container">
        <h3 className="subsection-title">Mobile Flashcards</h3>
      </div>
      <div className="subtitle-container">
        <div className="icons-container">
          <TechIcon title="React Native" source={reactnative_icon}/>
          <TechIcon title="Redux" source={redux_icon}/>
          <TechIcon title="Expo" source={expo_icon}/>
          <TechIcon title="Node.js" source={nodejs_icon}/>
          <TechIcon title="iOS" source={iOS_icon} />
          <TechIcon title="Android" source={android_icon}/>
        </div>
        <div className="links-container">
          <span className="link inactive">LIVE</span>
          <a className="link" target="_blank" rel="noreferrer noopener" href="https://github.com/Waleed-BS/Flashcards">
            <span>SOURCE</span>
          </a>
        </div>
      </div>
    </div>
    <div className="bottom-container">
      <p>
        This Mobile App allows users to study a collection of flashcards.
        Users can create decks of unlimited flashcards to quiz
        themselves and receive score. Users can also get notifications to remind them to study.
      </p>
    </div>
  </div>

  <div className="inner-container">
    <div className="img-container">
      <img src={Readable_gif} alt="Readable.gif" />
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
          <TechIcon title="ES6" source={javascript_icon}/>
          <TechIcon title="Express.js" source={express_icon}/>
        </div>
        <div className="links-container">
          <span className="link inactive">LIVE</span>
          <a className="link" target="_blank" rel="noreferrer noopener" href="https://github.com/Waleed-BS/Readable">
            <span>SOURCE</span>
          </a>
        </div>
      </div>
    </div>
    <div className="bottom-container">
      <p>
        I developed a responsive Single-Page App where users
        can create posts under a chosen category,
        comment on posts, edit/delete or vote on posts or comments,
        and sort posts or comments by time or votes.
      </p>
    </div>
  </div>

  <div className="inner-container">
    <div className="img-container">
      <img src={MyReads_gif} alt="MyReads.gif" />
    </div>
    <div className="middle-container">
      <div className="title-container">
        <h3 className="subsection-title">My Reads</h3>
      </div>
      <div className="subtitle-container">
        <div className="icons-container">
          <TechIcon title="React" source={react_icon} />
          <TechIcon title="Node.js" source={nodejs_icon} />
          <TechIcon title="ES6" source={javascript_icon}/>
          <TechIcon title="Heroku" source={heroku_icon}/>
        </div>
        <div className="links-container">
          <a className="link" target="_blank" rel="noreferrer noopener" href="https://my--reads.herokuapp.com/">
            <span>LIVE</span>
          </a>
          <a className="link" target="_blank" rel="noreferrer noopener" href="https://github.com/Waleed-BS/MyReads"><span>SOURCE</span></a>
        </div>
      </div>
    </div>
    <div className="bottom-container">
      <p>
        I made a simple bookshelf web app where users can categorize
        their books. Users can search for books by title or author
        from an express.js back-end server, then categorize them by
        “read,” “currently reading,” or “want to read”.
      </p>
    </div>
  </div>

  <div className="inner-container">
    <div className="img-container">
      <img src={data_displayer_gif} alt="data_displayer.gif" />
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
          {/* <TechIcon title="Ruby on Rails" source={rails} /> */}
          {/* <TechIcon title="AWS" source={aws} /> */}
          {/* <TechIcon title="PostgreSQL" source={postgresql} /> */}
        </div>
        <div className="links-container">
          <span className="link inactive">LIVE</span>
          <a className="link" target="_blank" rel="noreferrer noopener" href="https://github.com/Waleed-BS/Temperature_Humidity_Tracker"><span>SOURCE</span></a>
        </div>
      </div>
    </div>
    <div className="bottom-container">
      <p>
        Log temperature/humidity data by DHT22 sensor connected to the Raspberry Pi for a period of time.
        Then log in to the website to display, log, or graph the data.
      </p>
    </div>
  </div>

</div>

)

export default Projects;
