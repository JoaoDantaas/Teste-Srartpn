const { Model, DataTypes } = require("sequelize");

class Talks extends Model {
  static associate(models) {
    this.hasMany(models.TalkNotes, { foreignKey: "talkId" });
    this.hasMany(models.TalkPoints, { foreignKey: "talkId" });
  }
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        ownerId: DataTypes.INTEGER,
        guestId: DataTypes.INTEGER,
        date: DataTypes.STRING,
        hour: DataTypes.STRING,
        checked: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        modelName: "Talks",
      }
    );
  }
}

module.exports = Talks;
