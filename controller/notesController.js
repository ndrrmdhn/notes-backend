const { query } = require("../database/Db");

const getNotes = async (req, res) => {
  try {
    const result = await query("SELECT * FROM notes");
    return res.status(200).json({ data: result });
  } catch (error) {
    console.log(error);
  }
};

const getNotesById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query("SELECT * FROM notes where id = ?", [id]);
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(400).json({ pesan: "Ada yang Salah", error });
  }
};

const addNotes = async (req, res) => {
  console.log(req.body);
  const { title, datetime, note } = req.body;
  try {
    await query("INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)", [
      title,
      datetime,
      note
    ]);
    return res.status(200).json({
      Pesan: "Notes Berhasil ditambahkan!",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateNotes = async (req, res) => {
  const { title, datetime, note } = req.body;
  const { id } = req.params;
  try {
    await query("UPDATE notes SET title = ?, datetime = ?, note = ? where id = ?", [
      title,
      datetime,
      note,
      id
    ]);
    return res.status(200).json({
      Pesan: "Notes Berhasil diubah!",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteNotes = async (req, res) => {
  const { id } = req.params;
  try {
    await query("DELETE FROM notes where id = ?", [id]);
    return res.status(200).json({
      Pesan: "Notes Berhasil dihapus!",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getNotes,
  getNotesById,
  addNotes,
  updateNotes,
  deleteNotes,
};