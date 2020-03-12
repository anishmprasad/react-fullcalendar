/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calender from "./Calender";
import { computefn } from "./Utils";

class App extends Component {
  componentDidMount() {
    let date = {
      start: "2020-03-07T00:00:00.000Z",
      end: "2020-03-10T00:00:00.000Z"
    };
    console.log(new computefn(date));
  }
  render() {
    return (
      <div className="demo-calendar cal cal-ltr cal-unthemed">
        <Calender />
      </div>
    );
  }
}

export default App;
