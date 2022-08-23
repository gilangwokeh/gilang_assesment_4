const cors = require('cors');
const exprees = require('express');
const body = require("body-parser");
const passport = require("passport")
const { connect } = require('mongoose');
const { success, error } = require("consola")
// const { DB, PORT } = require("./config/index");
import Config from "./config";
const app = exprees();
app.use(cors());

app.use(body.json());

//user middleware
app.use("/api/users", require('./routes/users'))
const startApp = async () => {
  try {
    await connect(Config.DB_mongodb, { useUnifiedTopology: true, useNewUrlParser: true })
      .then(() => success({ message: `Successfully connection with the database \n ${Config.DB_mongodb}`, badge: true }))

    await app.listen(Config.PORT, () => success({ message: `server started server on port ${Config.PORT}`, badge: true }))
  } catch (error) {
    ((error : any) => error({ message: `unable to connection the database  \n ${error}`, badge: true }))
  }
}
startApp()