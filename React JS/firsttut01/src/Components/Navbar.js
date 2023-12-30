import React from "react";
import PropTypes from "prop-types"; // PropTypes means type of the property i.e. whether String,array etc
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.pageTitle}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.about}
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
            </div>

          </div>
        </div>
      </nav>
      {/* This was the concept of props. We are creating the navbar in this seperate js page so that it can be reused later. 
Props in React are inputs that you pass into components. The props enable the component to access customised data, values, and pieces of information that the inputs hold. The term 'props' is an abbreviation for 'properties' which refers to the properties of an object. */}
    </>
  );
}

// Navbar.propTypes = {
//   pageTitle: PropTypes.string,
//   about: PropTypes.string,
// };

// isRequired attribute is used to set to make any props to be present mandatorily. Default prop would solve the propblem but in case if we forget to mention the default prop too is required attribute would resolve the problem
Navbar.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

// DEFAULT PROPS ---> This is used if we do not specify any props. Default value is replaced
Navbar.defaultProps = {
  pageTitle: "Set title Here",
  about: "About Us",
};