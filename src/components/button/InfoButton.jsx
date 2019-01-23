import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { FaArrowRight, FaClose, FaInfo } from 'react-icons/lib/fa/'
// import { FaArrowRight } from 'react-icons/lib/fa/'
// import { MdClose } from 'react-icons/lib/md'

const InfoButton = ({
  topPx,
  rightPx,
  classes,
  isActive,
  isFixed,
  onClick,
  buttonRef,
  locationPathName,
  isHovered, // when nav is hovered, blur button
}) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.block} ${isActive ? classes.isActive : ''} ${isFixed ?
        classes.isFixed : ''} ${isHovered ? classes.isBlurred : ''}`}
      style={{ top: topPx, right: rightPx }}
      ref={buttonRef}
      aria-label="Remark"
    >
      {isActive ? (
        locationPathName === '/' ? (
          <FaArrowRight />
        ) : (
          <FaInfo />
        )
      ) : (
        <FaClose />
      )}
    </button>
  )
}

const mapStateToProps = ({ isHovered }) => {
  return { isHovered }
}

InfoButton.propTypes = {
  topPx: PropTypes.string.isRequired,
  rightPx: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  isFixed: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, null)(InfoButton)
