import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super(); // super constructor i.e. the constructor of component class needs to be called first before using the constructor of the derived class.
        this.state = {
            article: [],
            loading: false,
        }
        // console.log("Constructor from class News")
    }
    async componentDidMount() {
        console.log("cdm")
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c074793f71924ad5a65b35b29eb675d6"
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            article: parsedData.articles
        }
        )
    }
    render() {
        console.log("render")
        return (
            <div className='container my-3'>
                <h2 className='my-3'>NewsMonkey - Top Headlines</h2>
                <div className='row'>
                    {this.state.article.map((element) => {
                        return <div className='col-md-4' key={element.url} ><NewsItem title={element.title ? element.title + "..." : ""} description={element.description ? element.description + "..." : ""} imageUrl={element.urlToImage} newsURL={element.url} /></div>
                    })}

                </div>
            </div>

        )
    }
}

export default News
