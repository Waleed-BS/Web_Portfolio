import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/index'
import ToolBoxListContainer from '../components/toolbox/ToolBoxListContainer'

const Toolbox = ({ location }) => (
  <Layout location={location}>
    <div className={'section toolbox'}>
      <Helmet title="That's my developer toolbox" />
      <h2 className={'section__md-heading headline-focus-animation'}>
        These are pieces of my{' '}
        <span className="section__md-heading__span">toolbox</span>
      </h2>
      <ToolBoxListContainer />
    </div>
  </Layout>
)

export default Toolbox
