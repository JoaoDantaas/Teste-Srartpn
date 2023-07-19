const Users = require("../models/User");
const { compare } = require("bcrypt");
const jwt = require("jsonwebtoken");

class ControllerSession {
  async createSession(req, res) {
    try {
      let { email, password } = req.body;

      const user = await Users.findOne({ where: { email } });

      if (user === null) {
        return res.status(403).json({ message: "Email ou senha inválida" });
      }

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        return res.status(403).json({ message: "Email ou senha inválida" });
      }

      const token = jwt.sign(
        {
          id: user.id,
        },
        "Secret key",
        {
          expiresIn: "24h",
        }
      );

      return res.status(200).json({ token: token });
    } catch (error) {
      return res.status(500).json({ mesage: error });
    }
  }
}

module.exports = new ControllerSession();
