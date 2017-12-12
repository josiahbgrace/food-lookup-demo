const express = require("express");
const fetch = require("node-fetch");

const app = express();

const bin_url = "http://httpbin.org/anything"

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/request", (req, res) => {
  return fetch(bin_url).then(
    response => {
      response.json().then(
        json => res.json(json)
      ).catch(error => {
        console.log(error)
        res.json({error})
      })
    }
  ).catch(error => {
    console.log(error)
    res.json({error})
  });
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
