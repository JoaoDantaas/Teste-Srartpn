const Users = require("../models/User");
const Talks = require("../models/Talks");

class ControllerTalk {
  async createTalk(req, res) {
    try {
      const ownerId = req.id;
      let { name, guestId, date, hour } = req.body;

      const owner = await Users.findOne({ where: { id: ownerId } });
      const guest = await Users.findOne({ where: { id: guestId } });

      if (!owner || !guest) {
        return res.status(403).json({ message: "Usuário não existe" });
      }

      const talk = await Talks.create({ name, ownerId, guestId, date, hour });

      return res.status(201).json({ talk });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mesage: "Ops, algo deu errado!" });
    }
  }
  async listTalks(req, res) {
    try {
      const talks = await Talks.findAll();

      return res.status(200).json({ talks });
    } catch (error) {
      return res.status(500).json({ mesage: "Ops, algo deu errado!" });
    }
  }
  async updateTalk(req, res) {
    try {
      const id = req.params.id;
      const { name, guestId, date, hour, checked } = req.body;

      const talk = await Talks.findOne({ where: { id } });

      if (!talk) {
        return res.status(403).json({ message: "Conversa não encontrada" });
      }

      if (guestId !== undefined) {
        const guest = await Users.findOne({ where: { id: guestId } });

        if (!guest) {
          return res.status(403).json({ message: "Usuário não encontrado" });
        }
      }

      const talkUpdate = await talk.update({
        name,
        guestId,
        date,
        hour,
        checked,
      });

      return res.status(200).json({ talkUpdate });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mesage: "Ops, algo deu errado!" });
    }
  }
  async deleteTalkPoint(req, res) {
    try {
      const id = req.params.id;

      const talk = await Talks.findOne({ where: { id } });

      if (!talk) {
        return res.status(403).json({ message: "Conversa não encontrada" });
      }

      await talk.destroy();

      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ message: "Ops, algo deu errado!" });
    }
  }
}

module.exports = new ControllerTalk();
