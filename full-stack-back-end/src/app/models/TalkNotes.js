const { Model, DataTypes } = require("sequelize");
const Talks = require("./Talks");

class TalkNotes extends Model {
  static associate(models) {
    TalkNotes.belongsTo(Talks, {
      constraints: true,
      foreignKey: "talkId",
      onDelete: "CASCADE",
    });
    TalkNotes.belongsTo(models.Users, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  }
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        talkId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "TalkNotes",
      }
    );
  }
}

module.exports = TalkNotes;
