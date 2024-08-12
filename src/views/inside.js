import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './inside.css'

const Inside = (props) => {
  return (
    <div className="inside-container">
      <Helmet>
        <title>Inside - Sturdy Muddy Marten</title>
        <meta property="og:title" content="Inside - Sturdy Muddy Marten" />
      </Helmet>
      <a
        href="https://media.discordapp.net/attachments/1207145262473158657/1272422928570515548/IMG_8890.png?ex=66baebb2&amp;is=66b99a32&amp;hm=f50137030666f7286efac45f0b53e75efdeb80fa64da06106a241e40cf3f5c8e&amp;=&amp;format=webp&amp;quality=lossless&amp;width=504&amp;height=722"
        target="_blank"
        rel="noreferrer noopener"
        className="inside-link"
      >
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/1207145262473158657/1272422928570515548/IMG_8890.png?ex=66baebb2&amp;is=66b99a32&amp;hm=f50137030666f7286efac45f0b53e75efdeb80fa64da06106a241e40cf3f5c8e&amp;=&amp;format=webp&amp;quality=lossless&amp;width=504&amp;height=722"
          className="inside-image"
        />
      </a>
      <Link to="/back" autoFocus="true" className="inside-navlink button">
        Continue! :D
      </Link>
    </div>
  )
}

export default Inside
