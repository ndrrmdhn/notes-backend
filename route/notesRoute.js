const express = require("express");
const { getNotes, getNotesById, addNotes, updateNotes, deleteNotes } = require("../controller/notesController.js");
const route = express.Router();

route.get("/notes", getNotes);
route.get("/notes/:id", getNotesById);
route.post("/notes", addNotes);
route.put("/notes/:id", updateNotes);
route.delete("/notes/:id", deleteNotes);

module.exports = route;