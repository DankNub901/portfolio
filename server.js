process.env.NODE_ENV = "development";

const express = require('./config/express');

const app = express();

app.listen(9091);

module.exports = app;

console.log("server is running...")