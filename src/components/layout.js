import React from "react"

import './global-styles/oldCss.css';

const Layout = ({ children }) => {

  return (
    <div className="global-wrapper">
      <header>
        Header
      </header>
      <main>{children}</main>
      <footer>
        Footer
      </footer>
    </div>
  )
}

export default Layout
