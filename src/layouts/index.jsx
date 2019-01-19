import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
require('typeface-exo-2')




import NavHam from '../components/navigation/NavHam'
import NavBar from '../components/navigation/NavBar'

import RemarkScreenContainer from '../components/remark_screen/RemarkScreenContainer'
import InfoButtonContainer from '../components/button/InfoButtonContainer'

import Footer from '../components/Footer'

import backgroundImage from '../assets/images/background-image.png'

import '../scss/application.scss'


class Layout extends React.Component {
  setIsInfoDisplayed() {
    // console.log(this.props.isInfoDisplayed)
    if (this.props.isInfoDisplayed === true) {
      this.props.setInfo(false)
    } else {
      this.props.setInfo(true)
    }
  }

  render() {
    return (
      <div className={`page-wrapper`}>
        <div
          className={`page-container ${
            this.props.isInfoDisplayed ? 'dec-opacity' : ''
          }`}
        >
          <Helmet
            // title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
              // { name: 'mobile-web-app-capable', content: 'yes'},
            ]}
          />
          <NavBar />
          <NavHam />

          {/* <img className="background-image" src={backgroundImage} /> */}
          {/* <img 
            className="background-image" 
            src={'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} 
          /> */}
          <img className="background-image" src={backgroundImage} />
          {/* <img 
            className="background-image" 
            src={'https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} 
          /> */}

          <main className={`main ${this.props.isHovered ? 'dec-opacity' : ''}`}>
            {/* <Main /> */}
            {/* URL is the filename of these React components in src/pages */}
            {this.props.children()}
            {/* if stateless React component with children argument use: */}
            {/* {children()} */}
          </main>
        </div>

        {this.props.location.pathname === '/' && (
          <div>
            <Footer className={this.props.isInfoDisplayed ? 'dec-opacity' : ''} />
            <InfoButtonContainer
              locationPathName={this.props.location.pathname}
            />
          </div>
        )}

        <RemarkScreenContainer
          locationPathName={this.props.location.pathname}
        />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

const mapStateToProps = ({ isInfoDisplayed, isHovered }) => {
  return { isInfoDisplayed, isHovered }
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
