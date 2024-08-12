import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './back.css'

const Back = (props) => {
  return (
    <div className="back-container">
      <Helmet>
        <title>Back - Sturdy Muddy Marten</title>
        <meta property="og:title" content="Back - Sturdy Muddy Marten" />
      </Helmet>
      <img
        alt="image"
        src="https://media.discordapp.net/attachments/1207145262473158657/1272417665759182891/image.png?ex=66bae6cb&amp;is=66b9954b&amp;hm=f8d93216c3a8d4c9ac2fd3de1ae6b1bb841f15e6b2fcad2d19a095901c257c0d&amp;=&amp;format=webp&amp;quality=lossless&amp;width=900&amp;height=587"
        className="back-image"
      />
      <Link to="/" autoFocus="true" className="back-navlink button">
        Restart :)
      </Link>
    </div>
  )
}

export default Back
