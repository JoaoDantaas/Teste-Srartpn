const { Router } = require("express");

const ControllerUser = require("./app/controllers/Controller.User");
const ControllerSessions = require("./app/controllers/Controller.Sessions");
const ControllerTalks = require("./app/controllers/Controller.Talks");
const ControllerTalkPoints = require("./app/controllers/Controller.TalkPoints");
const ControllerTalkNotes = require("./app/controllers/Controller.TalkNotes");

const router = Router();

const authMiddleware = require("./app/middlewares/auth");

/* SESSION */

router.post("/login", ControllerSessions.createSession);

/* USERS */

router.post("/user", ControllerUser.createUser);
router.get("/user", ControllerUser.listUsers);
router.get("/user/:id", ControllerUser.listUserById);
router.get("/profile", authMiddleware, ControllerUser.listProfile);

/* TALK */

router.post("/talk", authMiddleware, ControllerTalks.createTalk);
router.get("/talk", ControllerTalks.listTalks);
router.patch("/talk/:id", ControllerTalks.updateTalk);
router.delete("/talk/:id", ControllerTalks.deleteTalkPoint);

/* TALK POINT */

router.post("/talkpoint", ControllerTalkPoints.createTalkPoint);
router.get("/talkpoint/:id", ControllerTalkPoints.listTalkPointsId);
router.get("/talkpoint", ControllerTalkPoints.listTalkPoints);
router.patch("/talkpoint/:id", ControllerTalkPoints.updateTalkPoint);
router.delete("/talkpoint/:id", ControllerTalkPoints.deleteTalkPoint);

/* TALK NOTES */

router.post("/talknotes", authMiddleware, ControllerTalkNotes.createTalkNotes);
router.get("/talknotes/:id", ControllerTalkNotes.listTalkNotesId);
router.get("/talknotes", ControllerTalkNotes.listTalkNotes);

module.exports = router;
