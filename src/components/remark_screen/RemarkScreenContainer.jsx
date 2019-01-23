import React from 'react'
import { connect } from 'react-redux'

import RemarkScreen from './RemarkScreen'

class RemarkScreenContainer extends React.Component {

  componentDidMount() {
    this.initializeEscClosing()
  }

  initializeEscClosing() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', e => {
        if (this.props.isInfoDisplayed && e.which === 27) {
          this.props.toggleRemark()
        }
      })
    }
  }

  handleClick(currentSection) {
    this.props.toggleRemark()
    this.props.setActive(currentSection)
  }

  render() {
    return (
      <div>
        <RemarkScreen
          isActive={this.props.isInfoDisplayed}
          locationPathName={this.props.locationPathName}
          onClick={(event) => this.handleClick(event)}
        />
        {this.props.isInfoDisplayed && (
          <div
            onClick={this.props.toggleRemark}
            className="remark-screen-overlay"
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ isInfoDisplayed }) => {
  return { isInfoDisplayed }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleRemark: event =>
      dispatch({
        type: 'TOGGLE_BUTTON',
        isInfoDisplayed: event,
      }),
    setActive: event =>
      dispatch({
        type: 'SET_ACTIVE',
        active: event,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  RemarkScreenContainer
)
