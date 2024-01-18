import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsURL } = this.props // newsURL is used to uniquely identify each news
    return (
      <div className='my-3'>
        <div className="card h-100" style={{ width: '18rem' }}>
          <img src={!imageUrl ? "https://medicaldialogues.in/h-upload/2024/01/13/229880-jn1-variant-of-covid-19.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsURL} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark mt-auto">Read More</a>
          </div>
        </div>
      </div>

    )
  }
}

export default NewsItem
