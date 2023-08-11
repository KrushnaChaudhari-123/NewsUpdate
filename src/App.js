import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import News from "./component/News";
export default class App extends Component {
   size =9;
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <News pageSize={this.size} country="in" category="general" />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/home"
              element={
                <News pageSize={this.size} country="in" category="general" />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/business"
              element={
                <News pageSize={this.size} country="in" category="business" />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/entertainment"
              element={
                <News
                  pageSize={this.size}
                  country="in"
                  category="entertainment"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/health"
              element={
                <News pageSize={this.size} country="in" category="health" />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/science"
              element={
                <News pageSize={this.size} country="in" category="science" />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/sports"
              element={
                <News pageSize={this.size} country="in" category="sports" />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/technology"
              element={
                <News pageSize={this.size} country="in" category="technology" />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
