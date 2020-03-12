import React from "react";
import "./index.css";
export default function Calender() {
  return (
    <div className="cal-view-container">
      <div className="cal-view cal-dayGridMonth-view cal-dayGrid-view">
        <table className="">
          <thead className="cal-head">
            <tr>
              <td className="cal-head-container cal-widget-header">
                <div className="cal-row cal-widget-header">
                  <table className="">
                    <thead>
                      <tr>
                        <th className="cal-day-header cal-widget-header cal-sun">
                          <span>Sun</span>
                        </th>
                        <th className="cal-day-header cal-widget-header cal-mon">
                          <span>Mon</span>
                        </th>
                        <th className="cal-day-header cal-widget-header cal-tue">
                          <span>Tue</span>
                        </th>
                        <th className="cal-day-header cal-widget-header cal-wed">
                          <span>Wed</span>
                        </th>
                        <th className="cal-day-header cal-widget-header cal-thu">
                          <span>Thu</span>
                        </th>
                        <th className="cal-day-header cal-widget-header cal-fri">
                          <span>Fri</span>
                        </th>
                        <th className="cal-day-header cal-widget-header cal-sat">
                          <span>Sat</span>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </td>
            </tr>
          </thead>
          <tbody className="cal-body">
            <tr>
              <td className="cal-widget-content">
                <div
                  className="cal-scroller cal-day-grid-container"
                  style={{ overflow: "hidden", height: "728px" }}
                >
                  <div className="cal-day-grid">
                    <div
                      className="cal-row cal-week cal-widget-content cal-rigid"
                      style={{ height: "121px" }}
                    >
                      <div className="cal-bg">
                        <table className="">
                          <tbody>
                            <tr>
                              <td
                                className="cal-day cal-widget-content cal-sun cal-past"
                                data-date="2020-03-01"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-mon cal-past"
                                data-date="2020-03-02"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-tue cal-past"
                                data-date="2020-03-03"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-wed cal-past"
                                data-date="2020-03-04"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-thu cal-past"
                                data-date="2020-03-05"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-fri cal-past"
                                data-date="2020-03-06"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-sat cal-past"
                                data-date="2020-03-07"
                              ></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="cal-content-skeleton">
                        <table>
                          <thead>
                            <tr>
                              <td
                                className="cal-day-top cal-sun cal-past"
                                data-date="2020-03-01"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-01","type":"day"}'
                                >
                                  1
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-mon cal-past"
                                data-date="2020-03-02"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-02","type":"day"}'
                                >
                                  2
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-tue cal-past"
                                data-date="2020-03-03"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-03","type":"day"}'
                                >
                                  3
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-wed cal-past"
                                data-date="2020-03-04"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-04","type":"day"}'
                                >
                                  4
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-thu cal-past"
                                data-date="2020-03-05"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-05","type":"day"}'
                                >
                                  5
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-fri cal-past"
                                data-date="2020-03-06"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-06","type":"day"}'
                                >
                                  6
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-sat cal-past"
                                data-date="2020-03-07"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-07","type":"day"}'
                                >
                                  7
                                </a>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="cal-event-container">
                                <a className="cal-day-grid-event cal-h-event cal-event cal-start cal-end cal-draggable cal-resizable">
                                  <div className="cal-content">
                                    {" "}
                                    <span className="cal-title">
                                      All Day Event
                                    </span>
                                  </div>
                                  <div className="cal-resizer cal-end-resizer"></div>
                                </a>
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className="cal-event-container">
                                <a className="cal-day-grid-event cal-h-event cal-event cal-start cal-not-end cal-draggable">
                                  <div className="cal-content">
                                    {" "}
                                    <span className="cal-title">
                                      Long Event
                                    </span>
                                  </div>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="cal-row cal-week cal-widget-content cal-rigid"
                      style={{ height: "121px" }}
                    >
                      <div className="cal-bg">
                        <table className="">
                          <tbody>
                            <tr>
                              <td
                                className="cal-day cal-widget-content cal-sun cal-past"
                                data-date="2020-03-08"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-mon cal-past"
                                data-date="2020-03-09"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-tue cal-past"
                                data-date="2020-03-10"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-wed cal-past"
                                data-date="2020-03-11"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-thu cal-today "
                                data-date="2020-03-12"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-fri cal-future"
                                data-date="2020-03-13"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-sat cal-future"
                                data-date="2020-03-14"
                              ></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="cal-content-skeleton">
                        <table>
                          <thead>
                            <tr>
                              <td
                                className="cal-day-top cal-sun cal-past"
                                data-date="2020-03-08"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-08","type":"day"}'
                                >
                                  8
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-mon cal-past"
                                data-date="2020-03-09"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-09","type":"day"}'
                                >
                                  9
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-tue cal-past"
                                data-date="2020-03-10"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-10","type":"day"}'
                                >
                                  10
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-wed cal-past"
                                data-date="2020-03-11"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-11","type":"day"}'
                                >
                                  11
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-thu cal-today "
                                data-date="2020-03-12"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-12","type":"day"}'
                                >
                                  12
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-fri cal-future"
                                data-date="2020-03-13"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-13","type":"day"}'
                                >
                                  13
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-sat cal-future"
                                data-date="2020-03-14"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-14","type":"day"}'
                                >
                                  14
                                </a>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="cal-event-container" colSpan="2">
                                <a className="cal-day-grid-event cal-h-event cal-event cal-not-start cal-end cal-draggable cal-resizable">
                                  <div className="cal-content">
                                    {" "}
                                    <span className="cal-title">
                                      Long Event
                                    </span>
                                  </div>
                                  <div className="cal-resizer cal-end-resizer"></div>
                                </a>
                              </td>
                              <td rowSpan="6"></td>
                              <td className="cal-event-container" colSpan="2">
                                <a className="cal-day-grid-event cal-h-event cal-event cal-start cal-end cal-draggable cal-resizable">
                                  <div className="cal-content">
                                    {" "}
                                    <span className="cal-title">
                                      Conference
                                    </span>
                                  </div>
                                  <div className="cal-resizer cal-end-resizer"></div>
                                </a>
                              </td>
                              <td className="cal-event-container" rowSpan="6">
                                <a className="cal-day-grid-event cal-h-event cal-event cal-start cal-end cal-draggable">
                                  <div className="cal-content">
                                    <span className="cal-time">7a</span>{" "}
                                    <span className="cal-title">
                                      Birthday Party
                                    </span>
                                  </div>
                                </a>
                              </td>
                              <td rowSpan="6"></td>
                            </tr>
                            <tr>
                              <td rowSpan="5"></td>
                              <td className="cal-event-container" rowSpan="5">
                                <a className="cal-day-grid-event cal-h-event cal-event cal-start cal-end cal-draggable">
                                  <div className="cal-content">
                                    <span className="cal-time">4p</span>{" "}
                                    <span className="cal-title">
                                      Repeating Event
                                    </span>
                                  </div>
                                </a>
                              </td>
                              <td rowSpan="5"></td>
                              <td className="cal-event-container">
                                <a className="cal-day-grid-event cal-h-event cal-event cal-start cal-end cal-draggable">
                                  <div className="cal-content">
                                    <span className="cal-time">10:30a</span>{" "}
                                    <span className="cal-title">Meeting</span>
                                  </div>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="cal-event-container">
                                <a className="cal-day-grid-event cal-h-event cal-event cal-start cal-end cal-draggable">
                                  <div className="cal-content">
                                    <span className="cal-time">12p</span>{" "}
                                    <span className="cal-title">Lunch</span>
                                  </div>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="cal-event-container cal-limited">
                                <a className="cal-day-grid-event cal-h-event cal-event cal-start cal-end cal-draggable">
                                  <div className="cal-content">
                                    <span className="cal-time">2:30p</span>{" "}
                                    <span className="cal-title">Meeting</span>
                                  </div>
                                </a>
                              </td>
                              <td className="cal-more-cell" rowSpan="1">
                                <div>
                                  <a className="cal-more">+3 more</a>
                                </div>
                              </td>
                            </tr>
                            <tr className="cal-limited">
                              <td className="cal-event-container">
                                <a className="cal-day-grid-event cal-h-event cal-event cal-start cal-end cal-draggable">
                                  <div className="cal-content">
                                    <span className="cal-time">5:30p</span>{" "}
                                    <span className="cal-title">
                                      Happy Hour
                                    </span>
                                  </div>
                                </a>
                              </td>
                            </tr>
                            <tr className="cal-limited">
                              <td className="cal-event-container">
                                <a className="cal-day-grid-event cal-h-event cal-event cal-start cal-end cal-draggable">
                                  <div className="cal-content">
                                    <span className="cal-time">8p</span>{" "}
                                    <span className="cal-title">Dinner</span>
                                  </div>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="cal-row cal-week cal-widget-content cal-rigid"
                      style={{ height: "121px" }}
                    >
                      <div className="cal-bg">
                        <table className="">
                          <tbody>
                            <tr>
                              <td
                                className="cal-day cal-widget-content cal-sun cal-future"
                                data-date="2020-03-15"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-mon cal-future"
                                data-date="2020-03-16"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-tue cal-future"
                                data-date="2020-03-17"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-wed cal-future"
                                data-date="2020-03-18"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-thu cal-future"
                                data-date="2020-03-19"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-fri cal-future"
                                data-date="2020-03-20"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-sat cal-future"
                                data-date="2020-03-21"
                              ></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="cal-content-skeleton">
                        <table>
                          <thead>
                            <tr>
                              <td
                                className="cal-day-top cal-sun cal-future"
                                data-date="2020-03-15"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-15","type":"day"}'
                                >
                                  15
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-mon cal-future"
                                data-date="2020-03-16"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-16","type":"day"}'
                                >
                                  16
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-tue cal-future"
                                data-date="2020-03-17"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-17","type":"day"}'
                                >
                                  17
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-wed cal-future"
                                data-date="2020-03-18"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-18","type":"day"}'
                                >
                                  18
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-thu cal-future"
                                data-date="2020-03-19"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-19","type":"day"}'
                                >
                                  19
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-fri cal-future"
                                data-date="2020-03-20"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-20","type":"day"}'
                                >
                                  20
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-sat cal-future"
                                data-date="2020-03-21"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-21","type":"day"}'
                                >
                                  21
                                </a>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td className="cal-event-container">
                                <a className="cal-day-grid-event cal-h-event cal-event cal-start cal-end cal-draggable">
                                  <div className="cal-content">
                                    <span className="cal-time">4p</span>{" "}
                                    <span className="cal-title">
                                      Repeating Event
                                    </span>
                                  </div>
                                </a>
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="cal-row cal-week cal-widget-content cal-rigid"
                      style={{ height: "121px" }}
                    >
                      <div className="cal-bg">
                        <table className="">
                          <tbody>
                            <tr>
                              <td
                                className="cal-day cal-widget-content cal-sun cal-future"
                                data-date="2020-03-22"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-mon cal-future"
                                data-date="2020-03-23"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-tue cal-future"
                                data-date="2020-03-24"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-wed cal-future"
                                data-date="2020-03-25"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-thu cal-future"
                                data-date="2020-03-26"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-fri cal-future"
                                data-date="2020-03-27"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-sat cal-future"
                                data-date="2020-03-28"
                              ></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="cal-content-skeleton">
                        <table>
                          <thead>
                            <tr>
                              <td
                                className="cal-day-top cal-sun cal-future"
                                data-date="2020-03-22"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-22","type":"day"}'
                                >
                                  22
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-mon cal-future"
                                data-date="2020-03-23"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-23","type":"day"}'
                                >
                                  23
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-tue cal-future"
                                data-date="2020-03-24"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-24","type":"day"}'
                                >
                                  24
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-wed cal-future"
                                data-date="2020-03-25"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-25","type":"day"}'
                                >
                                  25
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-thu cal-future"
                                data-date="2020-03-26"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-26","type":"day"}'
                                >
                                  26
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-fri cal-future"
                                data-date="2020-03-27"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-27","type":"day"}'
                                >
                                  27
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-sat cal-future"
                                data-date="2020-03-28"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-28","type":"day"}'
                                >
                                  28
                                </a>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className="cal-event-container">
                                <a
                                  className="cal-day-grid-event cal-h-event cal-event cal-start cal-end cal-draggable cal-resizable"
                                  href="http://google.com/"
                                >
                                  <div className="cal-content">
                                    {" "}
                                    <span className="cal-title">
                                      Click for Google
                                    </span>
                                  </div>
                                  <div className="cal-resizer cal-end-resizer"></div>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="cal-row cal-week cal-widget-content cal-rigid"
                      style={{ height: "121px" }}
                    >
                      <div className="cal-bg">
                        <table className="">
                          <tbody>
                            <tr>
                              <td
                                className="cal-day cal-widget-content cal-sun cal-future"
                                data-date="2020-03-29"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-mon cal-future"
                                data-date="2020-03-30"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-tue cal-future"
                                data-date="2020-03-31"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-wed cal-other-month cal-future"
                                data-date="2020-04-01"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-thu cal-other-month cal-future"
                                data-date="2020-04-02"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-fri cal-other-month cal-future"
                                data-date="2020-04-03"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-sat cal-other-month cal-future"
                                data-date="2020-04-04"
                              ></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="cal-content-skeleton">
                        <table>
                          <thead>
                            <tr>
                              <td
                                className="cal-day-top cal-sun cal-future"
                                data-date="2020-03-29"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-29","type":"day"}'
                                >
                                  29
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-mon cal-future"
                                data-date="2020-03-30"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-30","type":"day"}'
                                >
                                  30
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-tue cal-future"
                                data-date="2020-03-31"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-03-31","type":"day"}'
                                >
                                  31
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-wed cal-other-month cal-future"
                                data-date="2020-04-01"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-04-01","type":"day"}'
                                >
                                  1
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-thu cal-other-month cal-future"
                                data-date="2020-04-02"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-04-02","type":"day"}'
                                >
                                  2
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-fri cal-other-month cal-future"
                                data-date="2020-04-03"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-04-03","type":"day"}'
                                >
                                  3
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-sat cal-other-month cal-future"
                                data-date="2020-04-04"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-04-04","type":"day"}'
                                >
                                  4
                                </a>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="cal-row cal-week cal-widget-content cal-rigid"
                      style={{ height: "123px" }}
                    >
                      <div className="cal-bg">
                        <table className="">
                          <tbody>
                            <tr>
                              <td
                                className="cal-day cal-widget-content cal-sun cal-other-month cal-future"
                                data-date="2020-04-05"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-mon cal-other-month cal-future"
                                data-date="2020-04-06"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-tue cal-other-month cal-future"
                                data-date="2020-04-07"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-wed cal-other-month cal-future"
                                data-date="2020-04-08"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-thu cal-other-month cal-future"
                                data-date="2020-04-09"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-fri cal-other-month cal-future"
                                data-date="2020-04-10"
                              ></td>
                              <td
                                className="cal-day cal-widget-content cal-sat cal-other-month cal-future"
                                data-date="2020-04-11"
                              ></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="cal-content-skeleton">
                        <table>
                          <thead>
                            <tr>
                              <td
                                className="cal-day-top cal-sun cal-other-month cal-future"
                                data-date="2020-04-05"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-04-05","type":"day"}'
                                >
                                  5
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-mon cal-other-month cal-future"
                                data-date="2020-04-06"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-04-06","type":"day"}'
                                >
                                  6
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-tue cal-other-month cal-future"
                                data-date="2020-04-07"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-04-07","type":"day"}'
                                >
                                  7
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-wed cal-other-month cal-future"
                                data-date="2020-04-08"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-04-08","type":"day"}'
                                >
                                  8
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-thu cal-other-month cal-future"
                                data-date="2020-04-09"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-04-09","type":"day"}'
                                >
                                  9
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-fri cal-other-month cal-future"
                                data-date="2020-04-10"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-04-10","type":"day"}'
                                >
                                  10
                                </a>
                              </td>
                              <td
                                className="cal-day-top cal-sat cal-other-month cal-future"
                                data-date="2020-04-11"
                              >
                                <a
                                  className="cal-day-number"
                                  data-goto='{"date":"2020-04-11","type":"day"}'
                                >
                                  11
                                </a>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
