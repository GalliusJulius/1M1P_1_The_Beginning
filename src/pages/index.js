import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Welcome on my Portfolio ! </h1>
          <p className="lead text-muted">I'm Victor Moreliere currently .. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quasi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, quos.</p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />

        </div>
      </div>
      <div className="row">
        <Link to="/about/" className="col-4">About me</Link>
        <Link to="/resume/" className="col-4">Work experiences / Education</Link>
        <Link to="/projects/" className="col-4">Projects (1M1P)</Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage
