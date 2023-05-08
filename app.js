const express = require("express");
const bodyParser = require("body-parser");
const ClickHouse = require("clickhouse");
const cors = require("cors");
const app = express();

app.use(cors());
/*
const clickhouse = new ClickHouse({
  host: "acu8lswxt0.us-east-1.aws.clickhouse.cloud",
  port: 8123,
  username: "default",
  password: "v887~jktseJUN",
  debug: false,
  basicAuth: null,
  isUseGzip: false,
  format: "json", //optional, default is TabSeparated
  config: {
    session_id: "session_id if need",
  },
});*/

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/posthog", (req, res) => {
  const event = req.body;
  console.log(event);

  /*clickhouse
    .query(
      `INSERT INTO my_database.my_table (event, distinct_id, timestamp) VALUES ('${event.event}', '${event.distinct_id}', '${event.timestamp}')`
    )
    .exec((err, response) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving event");
      } else {
        console.log("Event saved");
        res.send("Event saved");
      }
    });  */
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
