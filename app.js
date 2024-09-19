require("dotenv").config();
const express = require("express");
const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
const { PrismaClient } = require("@prisma/client");
const router = require("./routes");
const app = express();

app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () =>
  console.log(`File Uploader - listening on port ${port}!`)
);
