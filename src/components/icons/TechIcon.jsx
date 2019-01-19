import React from 'react'

export default props => {
  return (
    <div className="techIcon-container">
      <img className="techIcon" alt={props.title} src={props.source} />
      <h3 className="techIcon-title">{props.title}</h3>
    </div>
  )
}
