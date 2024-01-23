import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "8",
    category:"general"
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.string.isRequired,
    category: PropTypes.string
  };
  constructor() {
    super(); // super constructor i.e. the constructor of component class needs to be called first before using the constructor of the derived class.
    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
    // console.log("Constructor from class News")
  }
  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${
      this.props.pageSize
    }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      article: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${
        this.props.pageSize
      }`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        article: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };
  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h2 className="my-3 text-center">NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        {/* This statement is using a conditional rendering technique in React. It checks if this.state.loading is truthy (evaluates to true), and if so, it renders the Spinner component.

Let's break it down:

this.state.loading: It accesses the loading property from the component's state.
&&: It's the logical AND operator in JavaScript. If the expression on the left side of && is truthy, it evaluates and returns the expression on the right side. If the left side is falsy, it returns the falsy value without evaluating the right side.
So, the overall meaning is:

If this.state.loading is true, the right-hand side of && (<Spinner/>) will be evaluated and rendered.
If this.state.loading is false or any falsy value, nothing will be rendered (the Spinner won't be displayed).
This is a common pattern in React for conditionally rendering components based on certain state values. In this case, it suggests that when the component is in a loading state (this.state.loading is true), you want to display a Spinner component to indicate that some asynchronous operation is in progress. */}
        <div className="row">
          {!this.state.loading &&
            this.state.article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title + "..." : ""}
                    description={
                      element.description ? element.description + "..." : ""
                    }
                    imageUrl={element.urlToImage}
                    newsURL={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
