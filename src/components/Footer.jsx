import React from 'react'

const Footer = ({ className }) => (
  <div className={`c-main-footer ${className}`}>
    <p className="c-main-footer__note">
      Built with{' '}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>{' '}
      and{' '}
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        React
      </a>
      . Hosted on{' '}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
         Netlify
      </a>. The code is open source and available at{' '}
      <a
        href="https://github.com/Waleed-BS/Web_Portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>.
    </p>
  </div>
)

export default Footer
