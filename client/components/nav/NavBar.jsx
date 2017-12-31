/*
    ./client/components/nav/NavBar.jsx
*/
import React from 'react';
import { connect } from 'react-redux';
import NavLinks from './NavLinks.jsx';
/* imported actions: */
import { setHover } from '../../actions/Nav_Actions.jsx'
import './NavBar.scss';

class NavBar extends React.Component {

  handleHoverTrue = () => {
    this.props.setHoverDispatch(true);
  };

  handleHoverFalse = () => {
    this.props.setHoverDispatch(false);
  };

  render() {
    return (
      <nav className={`NavBar${this.props.isHovering ? ' hovering' : ''}`} onMouseEnter={this.handleHoverTrue} onMouseLeave={this.handleHoverFalse}>
        <NavLinks />
      </nav>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isHovering: state.navBar.hovering,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHoverDispatch: (hover) => {
      dispatch(setHover(hover));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
