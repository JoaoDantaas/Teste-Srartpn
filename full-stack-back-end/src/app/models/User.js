const { Model, DataTypes } = require("sequelize");

class Users extends Model {
  static associate(models) {
    this.hasMany(models.TalkNotes, { foreignKey: "userId" });
  }
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize,
        scopes: {
          withoutPassword: {
            attributes: { exclude: ["password"] },
          },
        },
        modelName: "Users",
      }
    );
  }
}

module.exports = Users;
