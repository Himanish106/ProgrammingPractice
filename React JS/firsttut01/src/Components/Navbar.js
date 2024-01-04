import React from "react";
import PropTypes from "prop-types"; // PropTypes means type of the property i.e. whether String,array etc
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">
            {props.pageTitle}
          </Link>
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
                <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'} `} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'} `} to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className="d-flex flex-md-row flex-column gap-0 column-gap-3">
              <div className="form-check form-switch">
                <input className="form-check-input blue" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" checked={props.blue} onChange={() => props.isCheck('blue')} />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Blue Mode
                </label>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input green" type="checkbox" role="switch" name="flexRadioDefault" id="flexRadioDefault2" checked={props.green} onChange={() => props.isCheck('green')} />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Green Mode
                </label>
              </div>
              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input dark" onChange={() => props.isCheck('dark')} type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={props.dark} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  {props.mode === 'light' ? 'Enable Dark Mode' : props.mode === 'Blue' || props.mode === 'Success' ? 'Enable Dark Mode' : 'Enable Light Mode'}
                </label>

              </div>
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
