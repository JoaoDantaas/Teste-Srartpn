const express = require("express");
const cors = require("cors");
const router = require("./routes");
require("./config/database");
require("./database/index");

class App {
  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }
  routes() {
    this.app.use(router);
  }
}

module.exports = new App().app;
