import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
export default class News extends Component {
  static propTypes={
    pageSize :PropTypes.number,
    country : PropTypes.string,
    category : PropTypes.string
  }
  static defaultProps ={
    pageSize:6,
    country: "in",
    category: "general"
  }
  article = [];
  constructor() {
    super();
    this.state = {
      article: this.article,
      page: 1,
      totalResults: 0,
      loading: false,
    };
  }
  //async and await is used with componentDidMount() method to fetch api results
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72af4f79794b40d5937a59aa7f0dbddb&page=1&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
 
  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72af4f79794b40d5937a59aa7f0dbddb&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72af4f79794b40d5937a59aa7f0dbddb&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">News Update - Top Headlines</h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.article.map((element) => {
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
                      date = {element.publishedAt}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between">
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
          </div>
        </div>
      </>
    );
  }
}
