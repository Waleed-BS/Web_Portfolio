/*
    ./client/components/App.jsx
*/
import React from 'react';
import { connect } from 'react-redux';
import { Route, Router, IndexRoute, BrowserRouter } from 'react-router';
/* imported components */
import Layout from './layout/Layout.jsx';
import Index from './main/Index.jsx'
// import NavBar from './nav/NavBar.jsx';


const App = () => {
  

  return (
    <div className="App">
      <Route path='/' component={Layout} />
        {/* <IndexRoute component={Index} /> */}

    </div>

  );
};

export default connect()(App);
