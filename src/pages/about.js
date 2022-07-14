import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About me"/>
    <section className="container my-5 section">

      <div className="container">
        <h1>Personal infos</h1>
        <ul>
          <li>Name</li>
          <li>Age</li>
          <li>Location</li>
          <li>Software engineer / MSc management IT systems</li>
          <li>Languages</li>
        </ul>
        <h1>Skills</h1>
        <h2>Soft-skills</h2>
        <h2>Coding languages</h2>
        <h2>Computer science oriented skills</h2>
      </div>
    </section>
  </Layout>
)

export default AboutPage
