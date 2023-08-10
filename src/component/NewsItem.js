import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <>
        <div className="card container my-3" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}
