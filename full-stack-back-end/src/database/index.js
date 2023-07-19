const Sequelize = require("sequelize");

const Users = require("../app/models/User");
const Talks = require("../app/models/Talks");
const TalkPoints = require("../app/models/TalkPoints");
const TalkNotes = require("../app/models/TalkNotes");

/*
    Connection Database
*/

const connectionDatabase = require("../config/database");

const models = [Users, Talks, TalkPoints, TalkNotes];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(connectionDatabase);
    models.forEach((elem) => elem.init(this.connection));
  }
}

module.exports = new Database();
