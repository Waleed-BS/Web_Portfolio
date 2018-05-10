import React from 'react';
import { connect } from 'react-redux';

/* imported components */
import NavBar from '../nav/NavBar.jsx';
import NavHam from '../nav/NavHam.jsx'
import Index from '../main/Index.jsx';

/* imported actions */
import { setHover } from '../../actions/Nav_Actions.jsx';

import './style.scss';

class Layout extends React.Component {

  handleClick = () => {
    this.props.setHoverDispatch(false);
  }

  render() {
    return (
      <div className="app-container">
        <nav>
          <NavHam />
          <NavBar />
        </nav>
        <div className="app-body">
          <div
            className={`app-content${this.props.isHovering ? ' shift-content' : ''}`}
            onClick={this.handleClick}
          >
            <Index />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isHovering: state.navBar.hovering,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHoverDispatch: (hover) => { dispatch(setHover(hover)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
