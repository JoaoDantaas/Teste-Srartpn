const Users = require("../models/User");
const { hashSync } = require("bcrypt");

class ControllerUser {
  async createUser(req, res) {
    try {
      let { name, email, password } = req.body;

      const emailAlreadyExist = await Users.findOne({ where: { email } });

      if (emailAlreadyExist) {
        return res
          .status(403)
          .json({ message: "Já existe um usuário com este email" });
      }
      password = hashSync(password, 10);

      const user = await Users.create({ name, email, password });

      const userWithoutPassword = await Users.scope("withoutPassword").findOne({
        where: user.id,
      });

      return res.status(201).json({ user: userWithoutPassword });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mesage: "Ops, algo deu errado!" });
    }
  }
  async listUsers(req, res) {
    try {
      const users = await Users.scope("withoutPassword").findAll();

      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).json({ mesage: "Ops, algo deu errado!" });
    }
  }
  async listProfile(req, res) {
    try {
      const id = req.id;

      const profile = await Users.scope("withoutPassword").findOne({
        where: { id },
      });

      return res.status(200).json({ profile });
    } catch (error) {
      return res.status(500).json({ message: "Ops, algo deu errado!" });
    }
  }
  async listUserById(req, res) {
    try {
      const id = req.params.id;

      const user = await Users.scope("withoutPassword").findOne({
        where: { id },
      });

      if (!user) {
        return res.status(403).json({ message: "Usuário não encontrado" });
      }

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ mesage: "Ops, algo deu errado!" });
    }
  }
}

module.exports = new ControllerUser();
