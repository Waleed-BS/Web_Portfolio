import React from 'react'
import { connect } from 'react-redux'

import InfoButton from './InfoButton'
import { setTimeout } from 'timers'

class InfoButtonContainer extends React.Component {
  constructor(props) {
    super(props)
    this.getButtonAnchor = this.getButtonAnchor.bind(this)
    this.windowResizeHandler = this.windowResizeHandler.bind(this)
    // this.getButtonAnchor = this.getButtonAnchor.bind(this)
    this.updateButtonPosition = this.updateButtonPosition.bind(this)
    this.updateButtonTop = this.updateButtonTop.bind(this)
    this.updateButtonRight = this.updateButtonRight.bind(this)
    this.state = {
      buttonAnchor: null,
      buttonTopPx: '-100px',
      buttonRightPx: '-100px',
      buttonIsActive: false,
      buttonIsFixed: false,
    }
  }

  componentDidMount() {
    // console.log('button component did mount')
    // get position of the button anchor and update its state
    this.getButtonAnchor()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.windowResizeHandler, false)
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.windowResizeHandler, false)
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log(`button component will receive props 
    // this.props: ${this.props.isInfoDisplayed} nextProps: ${
    //   nextProps.isInfoDisplayed
    // }`)

    const infoButtonToggled =
      nextProps.isInfoDisplayed !== this.props.isInfoDisplayed

    if (infoButtonToggled) {
      this.setState(prevState => ({
        buttonIsActive: !nextProps.isInfoDisplayed,
        buttonIsFixed: nextProps.isInfoDisplayed,
        buttonTopPx: `${
          nextProps.isInfoDisplayed ? '60px' : prevState.buttonTopPx
        }`,
        buttonRightPx: `${nextProps.isInfoDisplayed ? '30px' : '-100px'}`,
      }))

      if (!nextProps.isInfoDisplayed) {
        this.updateButtonPosition(true)
      }
    }

    if (this.props.locationPathName !== nextProps.locationPathName) {
      this.setState({
        buttonAnchor: null,
        buttonIsActive: false,
        buttonIsFixed: false,
      })
    }
  }

  componentDidUpdate() {
    // console.log('button component did update')

    if (!this.state.buttonAnchor) {
      this.getButtonAnchor()
    }

    if (this.state.buttonIsFixed) {
      // this.infoButton.blur()
    }
  }
  // called whenever the window size changes
  windowResizeHandler() {
    // console.log('window resize handler')

    if (this.props.isInfoDisplayed) {
      return false
    }

    if (!this.state.buttonAnchor) {
      return this.getButtonAnchor()
    }

    this.updateButtonPosition(true)
  }

  getButtonAnchor() {
    // console.log('get button anchor')

    const buttonAnchor = document.getElementById('align-button')
    this.setState(
      () => ({
        buttonAnchor: buttonAnchor,
      }),
      this.updateButtonPosition(true)
    )
  }

  /**
   * @param  {boolean} initialization
   * set it to React's component's state if its true
   */
  updateButtonPosition(initialization) {
    // console.log('update button top position')
    if (initialization) {
      this.setState(() => ({
        buttonIsActive: true,
      }))
    }

    let timeout
    // prevents a function from being called every time window resizes
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      const buttonAnchor = this.state.buttonAnchor
      const infoButton = this.infoButton
      const body = document.querySelector('body')

      this.updateButtonTop(buttonAnchor, infoButton, body, initialization)

      // when the button position is updated for the first time, after the page load,
      // the script splits the updating process into two steps, the second step, a
      // update of the state.buttonRightPx value is triggered only after the updating
      // of the state.buttonTopPx value; thanks to that split, the button comes up
      // on the page horizontaly. (css transition is applied only to the "right" value
      // because only that value changes at that moment)
      if (!initialization) {
        this.updateButtonRight(buttonAnchor, infoButton, body)
      }
    }, 500)
  }

  /* 
    
  */
  updateButtonTop(anchor, button, body, initialization) {
    // console.log('update button top')
    const anchorOffsetTop = anchor.offsetTop
    const anchorOffsetHeight = anchor.offsetHeight
    const buttonOffsetHeight = button.offsetHeight

    const buttonTop =
      anchorOffsetTop + anchorOffsetHeight / 2 - buttonOffsetHeight / 2

    this.setState(
      () => ({
        buttonTopPx: `${buttonTop}px`,
      }),
      () => {
        if (initialization) {
          setTimeout(() => {
            return this.updateButtonRight(anchor, button, body)
          }, 300)
        }
      }
    )
  }

  updateButtonRight(anchor, button, body) {
    // console.log('updateButtonRight(anchor, button, body)')
    const anchorOffsetLest = anchor.offsetLeft
    const anchorOffsetWidth = anchor.offsetWidth
    const buttonOffsetWidth = button.offsetWidth
    const bodyWidth = body.offsetWidth

    const buttonRight =
      bodyWidth - anchorOffsetLest - anchorOffsetWidth - buttonOffsetWidth * 1.5

    this.setState(() => ({
      buttonRightPx: `${buttonRight}px`,
    }))
  }

  render() {
    return (
      <InfoButton
        onClick={() => this.props.setInfo()}
        buttonRef={btn => (this.infoButton = btn)}
        topPx={this.state.buttonTopPx}
        rightPx={this.state.buttonRightPx}
        isActive={this.state.buttonIsActive}
        isFixed={this.state.buttonIsFixed}
        locationPathName={this.props.locationPathName}
        classes={{
          block: 'c-info-button',
          isActive: 'c-info-button--is-active',
          isFixed: 'c-info-button--is-fixed',
          isBlurred: 'dec-opacity',
        }}
      />
    )
  }
}

const mapStateToProps = ({ isInfoDisplayed }) => {
  return { isInfoDisplayed }
}

const mapDispatchToProps = dispatch => {
  return {
    setInfo: event =>
      dispatch({
        type: 'TOGGLE_BUTTON',
        isInfoDisplayed: event,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoButtonContainer)
