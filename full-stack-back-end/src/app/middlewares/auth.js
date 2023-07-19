const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization?.split(" ")[1];

  if (!authHeader) {
    return res.status(401).json({ message: "Token não existe!" });
  }

  try {
    jwt.verify(authHeader, "Secret key", (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: "Token Inválido" });
      }

      if (decoded) {
        req.id = decoded.id;
      }

      return next();
    });
  } catch (error) {
    return res.status(500).json({ message: "Ops, Algo deu errado!" });
  }
};
