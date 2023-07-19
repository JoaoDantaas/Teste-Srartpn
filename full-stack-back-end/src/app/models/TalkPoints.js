const { Model, DataTypes } = require("sequelize");

class TalkPoints extends Model {
  static associate(models) {
    this.belongsTo(models.Talks, {
      foreignKey: "talkId",
      onDelete: "CASCADE",
    });
  }
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        talkId: DataTypes.INTEGER,
        checked: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        modelName: "TalkPoints",
      }
    );
  }
}

module.exports = TalkPoints;
