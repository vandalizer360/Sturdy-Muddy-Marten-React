import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './first.css'

const First = (props) => {
  return (
    <div className="first-container">
      <Helmet>
        <title>Sturdy Muddy Marten</title>
        <meta property="og:title" content="Sturdy Muddy Marten" />
      </Helmet>
      <div className="first-container1">
        <Link to="/inside" autoFocus="true" className="first-navlink button">
          Open!! :)
        </Link>
      </div>
    </div>
  )
}

export default First
