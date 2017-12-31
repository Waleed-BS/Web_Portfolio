import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../nav/NavBar.jsx';
import NavHam from '../nav/NavHam.jsx'


// import Footer from '../Footer/Footer';
// import Index from '../main/Index.jsx';
import { setHover } from '../../actions/Nav_Actions.jsx';
import './style.scss';

class Layout extends React.Component {

  handleClick = () => {
    this.props.setHoverDispatch(false);
  }

  render() {
    return (
      <div className="app-container">
        <header>
          <NavHam />
        </header>
        <div className="app-body">
          <NavBar />
          <div
            className={`app-content${this.props.isHovering ? ' shift-content' : ''}`}
            onClick={this.handleClick}
          >
            {/* <Index /> */}
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
