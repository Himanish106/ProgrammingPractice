import React from "react";

const NewsItem=(props)=> {
    let { title, description, imageUrl, newsURL, author, date,source } = props; // newsURL is used to uniquely identify each news
    return (
      <div className="my-3">
        <div className="card h-100">
          <img
            src={
              !imageUrl
                ? "https://medicaldialogues.in/h-upload/2024/01/13/229880-jn1-variant-of-covid-19.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body d-flex flex-column">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
                {source}
              </span>
            <h5 className="card-title">
              {title}
              
            </h5>
            <p className="card-text">{description}</p>
            <a
              href={newsURL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark mt-auto"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
