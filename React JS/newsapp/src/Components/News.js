import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticle(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  // Substitute for componentDidMount
  useEffect(() => {
    document.title = `${
      props.category.charAt(0).toUpperCase() + props.category.slice(1)
    } - NewsMonkey`;
    updateNews();
  }, []);
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle(article.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  return (
    <>
      <h2 className="text-center" style={{ marginTop: "76px" }}>
        NewsMonkey - Top Headlines from{" "}
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
      </h2>
      {loading && <Spinner />}
      {/* This statement is using a conditional rendering technique in React. It checks if state.loading is truthy (evaluates to true), and if so, it renders the Spinner component.

Let's break it down:

state.loading: It accesses the loading property from the component's state.
&&: It's the logical AND operator in JavaScript. If the expression on the left side of && is truthy, it evaluates and returns the expression on the right side. If the left side is falsy, it returns the falsy value without evaluating the right side.
So, the overall meaning is:

If state.loading is true, the right-hand side of && (<Spinner/>) will be evaluated and rendered.
If state.loading is false or any falsy value, nothing will be rendered (the Spinner won't be displayed).
This is a common pattern in React for conditionally rendering components based on certain state values. In this case, it suggests that when the component is in a loading state (state.loading is true), you want to display a Spinner component to indicate that some asynchronous operation is in progress. */}
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length !== totalResults}
        loader={<Spinner />}
        style={{ overflow: "hidden" }}
      >
        <div className="container">
          <div className="row">
            {article.map((element) => {
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
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={state.page <= 1}
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
            disabled={
              state.page + 1 >
              Math.ceil(state.totalResults / props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div> */}
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: "8",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.string.isRequired,
  category: PropTypes.string,
};
export default News;
