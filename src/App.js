/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calender from "./Calender";
import { computefn } from "./Utils";
import { Calendar } from "@fullcalendar/core";
// import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import listPlugin from "@fullcalendar/list";

// document.addEventListener("DOMContentLoaded", function() {

// });

class App extends Component {
  componentDidMount() {
    var calendarEl = document.getElementById("demo-calendar");

    var calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      // header: {
      //   left: "prev,next today",
      //   center: "title",
      //   right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
      // },
      defaultDate: "2018-01-12",
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: "All Day Event",
          start: "2018-01-01"
        },
        {
          title: "Long Event",
          start: "2018-01-07",
          end: "2018-01-10"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: "2018-01-09T16:00:00"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: "2018-01-16T16:00:00"
        },
        {
          title: "Conference",
          start: "2018-01-11",
          end: "2018-01-13"
        },
        {
          title: "Meeting",
          start: "2018-01-12T10:30:00",
          end: "2018-01-12T12:30:00"
        },
        {
          title: "Lunch",
          start: "2018-01-12T12:00:00"
        },
        {
          title: "Meeting",
          start: "2018-01-12T14:30:00"
        },
        {
          title: "Happy Hour",
          start: "2018-01-12T17:30:00"
        },
        {
          title: "Dinner",
          start: "2018-01-12T20:00:00"
        },
        {
          title: "Birthday Party",
          start: "2018-01-13T07:00:00"
        },
        {
          title: "Click for Google",
          url: "http://google.com/",
          start: "2018-01-28"
        }
      ]
    });

    calendar.render();

    let eve = [
      { title: "All Day Event", start: "2020-03-01" },
      { title: "Long Event", start: "2020-03-07", end: "2020-03-10" },
      {
        groupId: "999",
        title: "Repeating Event",
        start: "2020-03-09T16:00:00+00:00"
      },
      {
        groupId: "999",
        title: "Repeating Event",
        start: "2020-03-16T16:00:00+00:00"
      },
      { title: "Conference", start: "2020-03-14", end: "2020-03-16" },
      {
        title: "Meeting",
        start: "2020-03-15T10:30:00+00:00",
        end: "2020-03-15T12:30:00+00:00"
      },
      { title: "Lunch", start: "2020-03-15T12:00:00+00:00" },
      { title: "Birthday Party", start: "2020-03-16T07:00:00+00:00" },
      {
        url: "http://google.com/",
        title: "Click for Google",
        start: "2020-03-28"
      },
      { title: "Meeting", start: "2020-03-15T14:30:00+00:00" },
      { title: "Happy Hour", start: "2020-03-15T17:30:00+00:00" },
      { title: "Dinner", start: "2020-03-15T20:00:00+00:00" }
    ];
    let date = {
      start: "2020-03-07T00:00:00.000Z",
      end: "2020-03-10T00:00:00.000Z"
    };
    console.log(new computefn(date));
  }
  render() {
    return (
      <div
        id="demo-calendar"
        className="demo-calendar cal cal-ltr cal-unthemed"
      >
        {/* <Calender /> */}
      </div>
    );
  }
}

export default App;
