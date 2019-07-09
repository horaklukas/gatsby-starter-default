/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { connect as connectFela } from "react-fela"

import FelaProvider from "./FelaProvider"
import Header from "./Header"
import { wrapper } from "./Layout.style"

const Layout = ({ children, styles }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <FelaProvider>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={styles.wrapper}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </FelaProvider>
  )
}

Layout.propTypes = {
  styles: PropTypes.shape({
    wrapper: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
}

export default connectFela({
  wrapper,
})(Layout)
