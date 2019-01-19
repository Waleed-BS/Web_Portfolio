import React from 'react'
import Helmet from 'react-helmet'

import ToolBoxListContainer from '../components/toolbox/ToolBoxListContainer'

const Toolbox = () => (
  <div className={'section toolbox'}>
    <Helmet title="That's my developer toolbox" />
    <h2 className={'section__md-heading headline-focus-animation'}>
      These are pieces of my {' '}
      <span className="section__md-heading__span">
        toolbox
      </span>
    </h2>
    <ToolBoxListContainer />
  </div>
)

export default Toolbox
