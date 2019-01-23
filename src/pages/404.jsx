import React from 'react'
import Layout from '../components/index'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <div>
      <h1>NOT FOUND</h1>
      <p>
        You just hit a route that doesn&#39;t exist...<span
          style={{ color: '#ff786a' }}
        >
          the sadness
        </span>.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
