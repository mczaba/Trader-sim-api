const fetch = require("node-fetch");

exports.search = (req, res, next) => {
  const url = `https://api.worldtradingdata.com/api/v1/stock_search?search_term=${req.params.term}&api_token=${process.env.APIKEY}&currency=EUR,USD`;
  fetch(url, { mode: "cors" })
    .then(response => response.json())
    .then(response => {
      res.json(response);
    })
    .catch(() => {
      res.status(401).json({ message: "couldn't fetch data from the API" });
    });
};

exports.details = (req, res, next) => {
  const url = `https://api.worldtradingdata.com/api/v1/stock?symbol=${req.params.symbol}&api_token=${process.env.APIKEY}`;
  fetch(url, { mode: "cors" })
    .then(response => response.json())
    .then(response => {
      res.json(response)
    })
    .catch(() => {
      res.status(401).json({ message: "couldn't fetch data from the API" });
    });
}