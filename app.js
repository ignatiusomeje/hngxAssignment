const express = require("express");
const App = express();

App.get("/api", (req, res, next) => {
  try {
    const day = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    console.log(req.query);
    const { slack_name, track } = req.query;
    return res.json({
      slack_name,
      current_day: day[new Date().getUTCDay()],
      utc_time: new Date().toISOString(),
      track,
      github_file_url: "",
      github_repo_url: "",
      status_code: 200,
    });
  } catch (error) {
    return res.json({
      error,
      status_code: 400,
    });
  }
});

module.exports = App;
