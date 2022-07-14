import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import '../styles/components/navbar.scss'

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-custom  navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">{siteTitle}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
                aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <ExactNavLink
                to="/about/"
              >
                About Me
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                  to="/resume/"
              >
                Resume
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                  to="/projects/"
              >
                1M1P
              </ExactNavLink>
            </li>
          </ul>
          <span className="navbar-text ">
            <a className='navbar-icon' href="https://github.com/GalliusJulius" ><AiFillGithub/></a>
          </span>
          <span className="navbar-text">
            <a className='navbar-icon' href="https://www.linkedin.com/in/victor-moreliere/" ><AiFillLinkedin/></a>
          </span>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
