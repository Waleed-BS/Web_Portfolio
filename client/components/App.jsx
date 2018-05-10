/* ./client/components/App.jsx */
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
/* imported components */
import Layout from './layout/Layout.jsx';
import Index from './main/Index.jsx'
import Projects from './sections/Projects.jsx'
// import NavBar from './nav/NavBar.jsx';

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <Route exact path="/" component={Layout} />
      </div>
    );
  }
}

export default connect()(App);
