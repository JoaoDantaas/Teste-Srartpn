const Talks = require("../models/Talks");
const TalkNotes = require("../models/TalkNotes");
const Users = require("../models/User");

class ControllerTalkNotes {
  async createTalkNotes(req, res) {
    try {
      const { name, talkId } = req.body;
      const userId = req.id;
      console.log(talkId);

      const talk = await Talks.findOne({ where: { id: talkId } });

      if (!talk) {
        return res.status(403).json({ message: "Conversa não existe" });
      }

      const talkNotes = await TalkNotes.create({
        name,
        talkId,
        userId,
      });

      return res.status(201).json({ talkNotes });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mesage: "Ops, algo deu errado!" });
    }
  }
  async listTalkNotesId(req, res) {
    try {
      const id = req.params.id;

      const talksNotes = await TalkNotes.findAll({ where: { talkId: id } });

      return res.status(200).json({ talksNotes });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mesage: "Ops, algo deu errado!" });
    }
  }
  async listTalkNotes(req, res) {
    try {
      const talksNotes = await TalkNotes.findAll();

      return res.status(200).json({ talksNotes });
    } catch (error) {
      return res.status(500).json({ mesage: "Ops, algo deu errado!" });
    }
  }
}

module.exports = new ControllerTalkNotes();
