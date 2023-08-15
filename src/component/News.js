import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  static defaultProps = {
    pageSize: 6,
    country: "in",
    category: "general",
  };
  articles = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      page: 1,
      totalResults: 0,
      loading: false,
    };
    document.title = `News Update - ${this.capitalize(this.props.category)}`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  //async and await is used with componentDidMount() method to fetch api results
  async componentDidMount() {
    this.updateNews();
  }

  // handleNext = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };

  // handlePrev = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  render() {
    return (
      <>
      
        <h2 className="text-center" style={{marginTop:"65px"}}>
          News Update - {this.capitalize(this.props.category)} Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
        <div className="container my-3">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    //Terniry opeartors are used to handle the null data
                    title={element.title ? element.title.slice(0, 45) : " "}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : " "
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          {/* Next and previous Button Removed after Adding Infinite scroll */}
          {/* <div className="container d-flex justify-content-between">
            <button
              type="button"
              onClick={this.handlePrev}
              disabled={this.state.page <= 1}
              className="btn btn-dark"
            >
              &#8592; Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              onClick={this.handleNext}
              className="btn btn-dark"
            >
              Next &#8594;
            </button>
          </div> */}
        </div>
        </InfiniteScroll>
      </>
    );
  }
}
