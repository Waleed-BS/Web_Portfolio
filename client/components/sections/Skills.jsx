import React from 'react'
import TechIcon from './TechIcon.jsx';
/* Languages icons */
import css3_icon from '../../assets/icons/css3.svg';
import python_icon from '../../assets/icons/python-5.svg';
import html_icon from '../../assets/icons/HTML5.svg';
import java_icon from '../../assets/icons/java-14.svg';
import javascript_icon from '../../assets/icons/javascript.svg';
import swift_icon from '../../assets/icons/Swift_logo.png';
import php_icon from '../../assets/icons/php.png';
import sql_icon from '../../assets/icons/sql.png';
import nosql_icon from '../../assets/icons/nosql.png';
/* Frameworks & Libraries icons */
import react_icon from '../../assets/icons/reactjs.svg';
import reactnative_icon from '../../assets/icons/reactnative.png';
import redux_icon from '../../assets/icons/redux.svg';
import nodejs_icon from '../../assets/icons/nodejs-icon.png';
import expressjs_icon from '../../assets/icons/expressjs.png';
import sass_icon from '../../assets/icons/sass.svg';
import jQuery_icon from '../../assets/icons/jquery.svg';
import bootstrap_icon from '../../assets/icons/bootstrap.svg';
import flask_icon from '../../assets/icons/flask.png';
/* Databases icons */
import sqlite_icon from '../../assets/icons/Sqlite.png';
import mysql_icon from '../../assets/icons/mysql.svg';
import mongodb_icon from '../../assets/icons/mongoDB.svg';
/* Development Tools icons */
import git_icon from '../../assets/icons/git.svg';
import unixshell_icon from '../../assets/icons/unixshell_icon.png';
import webpack_icon from '../../assets/icons/webpack.svg';
import heroku_icon from '../../assets/icons/heroku.svg';
import babel_icon from '../../assets/icons/babel.svg';
import aws_icon from '../../assets/icons/aws.svg';
import './Skills.scss';

const Skills = () => {

  return (
    <div
      id="Skills"
      className="section"
    >
        <h1 className="section-title">Skills</h1>
        <div className="inner-container">
          <h3 className="subsection-title">Languages</h3>
          <TechIcon title="HTML 5" source={html_icon} />
          <TechIcon title="CSS 3" source={css3_icon} />
          <TechIcon title="JavaScript (including ES6)" source={javascript_icon} />
          <TechIcon title="Python" source={python_icon} />
          <TechIcon title="Java" source={java_icon} />
          <TechIcon title="PHP" source={php_icon} />
          <TechIcon title="Swift" source={swift_icon} />
          <TechIcon title="Relational database" source={sql_icon} />
          <TechIcon title="Non-relational databases" source={nosql_icon} />
        </div>

        <div className="inner-container">
          <h3 className="subsection-title">Frameworks/Libraries</h3>
          <TechIcon title="React" source={react_icon} />
          <TechIcon title="React Native" source={reactnative_icon} />
          <TechIcon title="Redux" source={redux_icon} />
          <TechIcon title="Node.js" source={nodejs_icon} />
          <TechIcon title="Express.js" source={expressjs_icon} />
          <TechIcon title="Sass" source={sass_icon} />
          <TechIcon title="jQuery" source={jQuery_icon} />
          <TechIcon title="Bootstrap" source={bootstrap_icon} />
          <TechIcon title="Flask" source={flask_icon} />
        </div>

        <div className="inner-container">
          <h3 className="subsection-title">Databases</h3>
          <TechIcon title="MySQL" source={mysql_icon} />
          <TechIcon title="MongoDB" source={mongodb_icon} />
          <TechIcon title="SQLite3" source={sqlite_icon} />
        </div>

        <div className="inner-container">
          <h3 className="subsection-title">Development Tools</h3>
          <TechIcon title="Unix Shell Scripting" source={unixshell_icon} />
          <TechIcon title="Git/Github" source={git_icon} />
          <TechIcon title="Webpack" source={webpack_icon} />
          <TechIcon title="Heroku" source={heroku_icon} />
          <TechIcon title="Babel" source={babel_icon} />
          <TechIcon title="AWS" source={aws_icon} />
        </div>
    </div>
  )
}

export default Skills;
