const Talks = require("../models/Talks");
const TalkPoints = require("../models/TalkPoints");

class ControllerTalkPoints {
  async createTalkPoint(req, res) {
    try {
      let { name, talkId } = req.body;

      const talk = await Talks.findOne({ where: { id: talkId } });

      if (!talk) {
        return res.status(403).json({ message: "Conversa não existe" });
      }

      const talkPoint = await TalkPoints.create({
        name,
        talkId,
      });

      return res.status(201).json({ talkPoint });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mesage: "Ops, algo deu errado!" });
    }
  }
  async listTalkPointsId(req, res) {
    try {
      const id = req.params.id;

      const talksPoints = await TalkPoints.findAll({ where: { talkId: id } });

      return res.status(200).json({ talksPoints });
    } catch (error) {
      return res.status(500).json({ mesage: "Ops, algo deu errado!" });
    }
  }
  async listTalkPoints(req, res) {
    try {
      const talksPoints = await TalkPoints.findAll();

      return res.status(200).json({ talksPoints });
    } catch (error) {
      return res.status(500).json({ mesage: "Ops, algo deu errado!" });
    }
  }
  async updateTalkPoint(req, res) {
    try {
      const id = req.params.id;
      const { name, checked } = req.body;

      const talkPoint = await TalkPoints.findOne({ where: { id } });

      if (!talkPoint) {
        return res.status(403).json({ message: "Conversa não encontrada" });
      }
      const talkPointUpdate = await talkPoint.update({
        name,
        checked,
      });

      return res.status(200).json({ talkPointUpdate });
    } catch (error) {
      return res.status(500).json({ mesage: "Ops, algo deu errado!" });
    }
  }
  async deleteTalkPoint(req, res) {
    try {
      const id = req.params.id;

      const talkPoint = await TalkPoints.findOne({ where: { id } });

      if (!talkPoint) {
        return res
          .status(403)
          .json({ message: "Ponto da conversa não encontrada" });
      }

      await talkPoint.destroy();

      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ mesage: "Ops, algo deu errado!" });
    }
  }
}

module.exports = new ControllerTalkPoints();
