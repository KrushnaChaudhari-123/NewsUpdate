import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {
  article = [

  ];
  constructor() {
    super();
    this.state = {
      article: this.article,
     };
  }
  //async and await is used with componentDidMount() method to fetch api results
  async componentDidMount(){
  
      let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=72af4f79794b40d5937a59aa7f0dbddb";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({article:parsedData.articles})
    
   
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="my-3 mx-2">News Update - Top Headlines</h2>
          <div className="row">
            {this.state.article.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem
                //Terniry opeartors are used to handle the null data
                  title={element.title?element.title.slice(0,45):" "}
                  description={element.description?element.description.slice(0,88):" "}
                  imageUrl={element.urlToImage}
                  newsUrl ={element.url}
                />
              </div>;
            })}
          </div>
        </div>
      </>
    );
  }
}
