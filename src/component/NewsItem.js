import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl } = this.props;
    return (
      <>
        <div className="card container my-3" style={{ width: "18rem" }}>
          <img
            className="card-img-top my-2"
            src={imageUrl}
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
