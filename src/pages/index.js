import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/pages/index.scss'

const IndexPage = () => {
    return(
     <Layout>
            <Seo title="Home" />
            <section className="py-5 container row mx-auto section ">
              <div className="py-lg-5 col-md-8 col-12 align-self-center text-center text-md-start">
                <div className="col-lg-10 col-md-8 mx-auto">
                  <h1 className="fw-light row">
                      <div className='col-md-auto col-12 align-self-center'>Welcome to my</div>
                      <div className="change_outer col-md-auto col-12 align-self-center">
                          <div className="change_inner align-self-center">
                              <div className='dynamic-word '>Portfolio!</div>
                              <div className='dynamic-word '>Resume!</div>
                              <div className='dynamic-word '>Web-Site!</div>
                              <div className='dynamic-word '>1M1P initiative!</div>
                          </div>
                     </div>
                  </h1>
                    <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut deleniti distinctio doloremque dolores eius inventore labore modi molestiae nam officiis, optio praesentium quaerat quam rem sed temporibus, unde, veniam.</p>
                </div>
              </div>
              <div className="row col-12 col-md-4 align-self-center text-center">
                <Link to="/about/" className='mt-4 col-12 col-sm-6 col-md-12 categorie-index'>
                    <StaticImage
                        src="../images/icons/about.svg"
                        width={120}
                        quality={95}
                        formats={["AUTO", "WEBP"]}
                        alt="Illustration of about section"
                        className="img-fluid"
                    />
                </Link>
                <Link to="/resume/" className='mt-4 col-12 col-sm-6 col-md-12 categorie-index'>
                    <StaticImage
                        src="../images/icons/CV.svg"
                        width={120}
                        quality={95}
                        formats={["AUTO", "WEBP"]}
                        alt="Image of a resume"
                        className="img-fluid"
                    />
                </Link>
                <Link to="/projects/" className='mt-4 col-12 categorie-index'>
                    <StaticImage
                        src="../images/icons/projects.svg"
                        width={120}
                        quality={95}
                        formats={["AUTO", "WEBP"]}
                        alt="A Gatsby astronaut"
                        className="img-fluid"
                    />
                </Link>
              </div>
            </section>
          </Layout>
  )
}
export default IndexPage
