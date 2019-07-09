import React from "react"
import { Link } from "gatsby"
import { connect as connectFela } from "react-fela"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"

import { imageSection } from "./index.style"

const IndexPage = ({ styles }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className={styles.imageSection}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default connectFela({ imageSection })(IndexPage)
