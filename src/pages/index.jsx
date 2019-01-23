import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/index'

class Index extends React.Component {
  state = {
    isContentHidden: true,
  }

  componentDidMount() {
    // let it render the page first then expose content
    setTimeout(() => this.setState({ isContentHidden: false }), 100)
    window.scroll({
      top: 50,
      behavior: 'smooth',
    })
  }

  render() {
    const { isContentHidden } = this.state
    return (
      <Layout location={this.props.location}>
        <div className="about content-box">
          <Helmet title="Waleed Binselim" />
          <h2
            className={`about__md-heading ${
              isContentHidden ? 'about__md-heading--hidden' : 'fade-in'
            }`}
          >
            Hi, it's Waleed
          </h2>
          <h2
            className={`about__bg-heading headline-focus-animation ${
              isContentHidden ? 'about__bg-heading--hidden' : 'fade-in-2'
            }`}
          >
            I'm a web developer
          </h2>
          <h2
            id={'align-button'}
            className={`about__md-heading ${
              isContentHidden ? 'about__md-heading--hidden' : 'fade-in-3'
            }`}
          >
            I build web applications
            <br />
            and websites
            <span
              className={
                'about__md-heading__span about__md-heading__span--blink-animation'
              }
            >
              |
            </span>
          </h2>
        </div>
      </Layout>
    )
  }
}

export default Index
