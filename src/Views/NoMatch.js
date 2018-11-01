import React from 'react'
import Helmet from 'react-helmet'

import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";

export default () => (
  <div id="page-doesnt-exist" className="page--body">
    <ScrollToTopOnMount />
    <h1>404</h1>
    <Helmet title='404' />
  </div>
)