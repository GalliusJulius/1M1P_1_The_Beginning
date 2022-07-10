import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ResumePage = () => (
  <Layout>
    <Seo title="Page two" />
    <div className="container text-center my-5">
      <h1>My resume</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, tempore.</p>
    </div>
  </Layout>
)

export default ResumePage
