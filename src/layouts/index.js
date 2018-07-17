import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavHam from '../components/navigation/navham'
import NavBar from '../components/navigation/navbar'
import Main from '../components/main/main'

import './style.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <nav>
      <NavHam />
      <NavBar />
    </nav>
    <main>
      <Main />
    </main>
    {/* <div> */}
    {/* {children()} */}
    {/* </div> */}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
