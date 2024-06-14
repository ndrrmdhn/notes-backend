const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const routeNotes = require("./route/notesRoute");

const dotenv = require("dotenv");
const { testConnection } = require("./database/Db");
app.use(cors());
dotenv.config();

app.use(bodyparser.json());
app.use(routeNotes);

app.listen(process.env.APP_PORT, async () => {
  await testConnection();
  console.log(`Server running at http://localhost:${process.env.APP_PORT}`);
});