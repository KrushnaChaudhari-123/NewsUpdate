import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
export default class News extends Component {
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
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=72af4f79794b40d5937a59aa7f0dbddb&page=1&pagesize=${this.props.pageSize}`;
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
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=72af4f79794b40d5937a59aa7f0dbddb&page=${
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
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=72af4f79794b40d5937a59aa7f0dbddb&page=${
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
              className="btn btn-success"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              onClick={this.handleNext}
              className="btn btn-success"
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}
